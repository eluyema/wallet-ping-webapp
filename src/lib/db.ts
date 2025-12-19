// Database connection for WalletPing
// IMPORTANT: Only creates WalletPing-specific tables, doesn't touch existing data

import { Pool } from 'pg';

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // Force UTC timezone for all connections
  options: '-c timezone=UTC',
});

// Initialize WalletPing tables (safe - won't affect existing tables)
export async function initWalletPingTables() {
  const client = await pool.connect();
  
  try {
    // Create walletping_wallets table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS walletping_wallets (
        id SERIAL PRIMARY KEY,
        address VARCHAR(42) UNIQUE NOT NULL,
        first_tracked_at TIMESTAMP NOT NULL DEFAULT NOW(),
        last_checked_at TIMESTAMP NOT NULL DEFAULT NOW(),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);

    // Create walletping_snapshots table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS walletping_snapshots (
        id SERIAL PRIMARY KEY,
        wallet_address VARCHAR(42) NOT NULL,
        balance DECIMAL(30, 18) NOT NULL,
        delta DECIMAL(30, 18) NOT NULL DEFAULT 0,
        timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        FOREIGN KEY (wallet_address) REFERENCES walletping_wallets(address) ON DELETE CASCADE
      );
    `);
    
    // Migrate existing timestamp column to timestamptz if needed
    await client.query(`
      DO $$ 
      BEGIN
        IF EXISTS (
          SELECT 1 FROM information_schema.columns 
          WHERE table_name = 'walletping_snapshots' 
          AND column_name = 'timestamp' 
          AND data_type = 'timestamp without time zone'
        ) THEN
          ALTER TABLE walletping_snapshots 
          ALTER COLUMN timestamp TYPE TIMESTAMPTZ 
          USING timestamp AT TIME ZONE 'UTC';
        END IF;
      END $$;
    `);

    // Create index for faster queries
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_walletping_snapshots_wallet 
      ON walletping_snapshots(wallet_address);
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_walletping_snapshots_timestamp 
      ON walletping_snapshots(timestamp DESC);
    `);

    // Tables initialized successfully
  } catch (error) {
    // SECURITY: Never log database connection details
    console.error('Error initializing WalletPing tables. Check database configuration.');
    throw new Error('Database initialization failed. Please check your database connection.');
  } finally {
    client.release();
  }
}

// Get or create wallet
export async function getOrCreateWallet(address: string) {
  const client = await pool.connect();
  
  try {
    // Try to get existing wallet
    const result = await client.query(
      'SELECT * FROM walletping_wallets WHERE address = $1',
      [address]
    );

    if (result.rows.length > 0) {
      // Update last_checked_at
      await client.query(
        'UPDATE walletping_wallets SET last_checked_at = NOW() WHERE address = $1',
        [address]
      );
      return result.rows[0];
    }

    // Create new wallet
    const newWallet = await client.query(
      'INSERT INTO walletping_wallets (address) VALUES ($1) RETURNING *',
      [address]
    );

    return newWallet.rows[0];
  } finally {
    client.release();
  }
}

// Add snapshot
export async function addSnapshot(address: string, balance: number, delta: number) {
  const client = await pool.connect();
  
  try {
    // Use explicit UTC timestamp from JavaScript
    const nowUTC = new Date().toISOString();
    const result = await client.query(
      'INSERT INTO walletping_snapshots (wallet_address, balance, delta, timestamp) VALUES ($1, $2, $3, $4) RETURNING *',
      [address, balance, delta, nowUTC]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

// Get last N snapshots for a wallet
export async function getSnapshots(address: string, limit: number = 10) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      `SELECT * FROM walletping_snapshots 
       WHERE wallet_address = $1 
       ORDER BY timestamp DESC 
       LIMIT $2`,
      [address, limit]
    );

    return result.rows;
  } finally {
    client.release();
  }
}

// Get last snapshot for a wallet
export async function getLastSnapshot(address: string) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      `SELECT * FROM walletping_snapshots 
       WHERE wallet_address = $1 
       ORDER BY timestamp DESC 
       LIMIT 1`,
      [address]
    );

    return result.rows[0] || null;
  } finally {
    client.release();
  }
}

export default pool;

