# WalletPing - Crypto Wallet Tracker

A beautiful, modern crypto wallet tracker built with Next.js, featuring real-time Ethereum balance tracking via Alchemy API and persistent storage with PostgreSQL.

🌐 **Domain:** walletping.io  
📧 **Support:** support@walletping.io

## Features

### Core Functionality
- ✅ **Real Ethereum Data** - Fetches actual balances from the blockchain via Alchemy
- ✅ **Smart Caching** - 1-minute cache to reduce API calls and improve speed
- ✅ **Persistent Tracking** - Stores historical snapshots in PostgreSQL
- ✅ **Change Detection** - Automatically detects balance increases/decreases
- ✅ **Timeline View** - See last 10 balance snapshots with relative timestamps
- ✅ **24-Hour Context** - Shows balance change over the past 24 hours

### User Experience
- ✅ **First-Time UX** - Special message for initial snapshot tracking
- ✅ **Relative Timestamps** - "5 minutes ago" format for easy scanning
- ✅ **Data Freshness Indicators** - Clear "Last fetched X minutes ago" labels
- ✅ **Help Icons** - Contextual tooltips to explain tracking logic
- ✅ **Coming Soon Teaser** - Notification feature preview to set expectations
- ✅ **Ping Wave Animation** - Satisfying animation when starting to track
- ✅ **Native Autocomplete** - Input remembers previous wallet addresses

### Design & Performance
- ✅ **Dark Theme** - Modern, elegant dark UI with glassmorphism effects
- ✅ **Animated Interface** - Subtle animations and smooth transitions
- ✅ **Benefit-Oriented Copy** - Focus on user problems and solutions
- ✅ **Rate Limiting** - 30 requests per minute per IP

### SEO & Analytics
- ✅ **Google Analytics** - G-4GVCS0B9BS tracking integrated
- ✅ **Advanced SEO** - Sitemap.xml, robots.txt, structured data (JSON-LD)
- ✅ **5 SEO Landing Pages** - Targeting different user intents
- ✅ **Open Graph & Twitter Cards** - Rich social media previews
- ✅ **Legal Pages** - Privacy Policy and Terms of Service

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual credentials:

```env
# Required
ALCHEMY_API_KEY=your_alchemy_api_key
DB_HOST=your_database_host
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

# Analytics (required for production)
NEXT_PUBLIC_GA_ID=G-4GVCS0B9BS
```

**Where to get credentials:**

#### Alchemy API Key
1. Sign up at [alchemy.com](https://www.alchemy.com/)
2. Create a new Ethereum app (Mainnet or Sepolia testnet)
3. Copy your API key from the dashboard

#### PostgreSQL Database
Choose any provider:
- [Neon](https://neon.tech/) - Free tier available
- [Supabase](https://supabase.com/) - Free tier available
- [Railway](https://railway.app/) - Free tier available
- [Render](https://render.com/) - Free tier available
- Local PostgreSQL installation

Get your connection details (host, port, database name, username, password).

**Note:** WalletPing creates its own tables (`walletping_wallets` and `walletping_snapshots`) and won't affect existing data.

#### Google Analytics (Optional)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The database tables are created automatically on first run.

### 4. Test with a Real Wallet

Try tracking any valid Ethereum wallet address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)

## Database

### Automatic Setup

The database tables are automatically created on first run. No manual migration needed!

### Tables Created

- **walletping_wallets** - Stores tracked wallet addresses
- **walletping_snapshots** - Stores balance snapshots with timestamps

**IMPORTANT:** These tables are isolated and won't affect any existing data in your database.

## How It Works

1. **User enters wallet address** → Validated for proper Ethereum format
2. **Alchemy API fetch** → Gets current ETH balance from blockchain
3. **Database check** → Compares with last snapshot
4. **Change detection** → Detects if balance went up, down, or stayed same
5. **Snapshot storage** → Saves new snapshot to PostgreSQL
6. **Display results** → Shows beautiful UI with balance and timeline

## Project Structure

```
src/
├── app/
│   ├── page.tsx                           # Homepage
│   ├── crypto-wallet-tracker/             # Main SEO page
│   ├── track-crypto-wallet/               # Action-focused SEO page
│   ├── check-crypto-wallet-balance/       # Balance checking SEO page
│   ├── did-my-crypto-arrive/              # Arrival confirmation page
│   ├── get-notified-when-crypto-arrives/  # Future notifications page
│   ├── privacy/                           # Privacy Policy
│   ├── terms/                             # Terms of Service
│   └── wallet/[address]/                  # Dynamic wallet tracking page
├── components/
│   ├── WalletInput.tsx                    # Address input form
│   ├── WalletTracker.tsx                  # Main tracking dashboard
│   ├── Header.tsx                         # Navigation header
│   ├── GoogleAnalytics.tsx                # GA integration
│   └── [Various SVG components]           # Illustrations
├── lib/
│   ├── db.ts                              # PostgreSQL database functions
│   ├── realTracker.ts                     # Alchemy API & tracking logic (server-side)
│   ├── trackerUtils.ts                    # Client-safe utilities
│   └── rateLimit.ts                       # Rate limiting logic
├── middleware.ts                          # Next.js middleware for rate limiting
└── public/
    ├── logo.png                           # Main logo
    ├── app-icon.png                       # App icon
    └── favicon.png                        # Favicon
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Styling
- **ethers.js** - Ethereum interaction
- **PostgreSQL** - Database with `pg` client
- **Alchemy SDK** - Blockchain API
- **Google Analytics** - Usage analytics
- **Vercel** - Deployment platform

## Rate Limiting

To ensure fair usage and prevent abuse:
- **30 requests per minute** per IP address for wallet pages
- Implemented via Next.js middleware
- In-memory storage (upgrade to Redis for production scaling)

## Legal & Privacy

- **Privacy Policy** - `/privacy` - Explains data collection and usage
- **Terms of Service** - `/terms` - User agreement and disclaimers
- **No cookies banner** - Only Google Analytics (minimal tracking)
- **No accounts required** - Privacy-first design

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `ALCHEMY_API_KEY`
   - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
   - `NEXT_PUBLIC_GA_ID` (optional)
4. Deploy!

### Environment Variables

In your hosting platform (Vercel, Railway, etc.), add these environment variables:

**Required:**
- `ALCHEMY_API_KEY` - Your Alchemy API key
- `DB_HOST` - PostgreSQL host
- `DB_PORT` - PostgreSQL port (usually 5432)
- `DB_NAME` - Database name
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password

**Optional:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics measurement ID (format: G-XXXXXXXXXX)

### Build & Deploy

```bash
npm run build  # Test production build locally
```

Deploy to Vercel, Railway, or your preferred platform.

### Custom Domain

Configure your custom domain (walletping.io) in your hosting platform settings.

## Development Notes

- The app uses server-side rendering for wallet pages
- Client components are separated from server components
- Database queries only run on the server
- Alchemy API calls are server-side only
- Rate limiting is applied via middleware
- Uses webpack mode (not Turbopack) for `pg` compatibility

## SEO Pages

The app includes multiple SEO-optimized landing pages:
- `/crypto-wallet-tracker` - Main tracker page
- `/track-crypto-wallet` - Action-oriented tracking guide
- `/check-crypto-wallet-balance` - Balance checking vs tracking
- `/did-my-crypto-arrive` - Arrival confirmation focus
- `/get-notified-when-crypto-arrives` - Future notifications

All pages include proper metadata, Open Graph tags, and internal linking.

## Troubleshooting

### Database Connection Issues
- Verify credentials are correct in `.env.local`
- Check that database allows external connections
- Ensure SSL/TLS is properly configured if required

### Alchemy API Issues
- Verify API key is correct
- Check network selection (Mainnet vs Testnet)
- Monitor usage in Alchemy dashboard

### Rate Limiting
- Default: 30 requests per minute per IP for wallet pages
- Adjust in `src/lib/rateLimit.ts` if needed
- For production scaling, consider upgrading to Redis

### Google Analytics Not Working
- Verify Measurement ID format: `G-XXXXXXXXXX`
- Check browser console for errors
- Ensure variable is `NEXT_PUBLIC_GA_ID` (must be public)

## Security Best Practices

⚠️ **Important Security Rules:**

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Never hardcode API keys** - Always use environment variables
3. **Never commit credentials** - Use `.env.example` for templates only
4. **Use SSL** for database connections in production
5. **Rotate credentials** regularly
6. **Monitor API usage** to prevent unexpected costs

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Commit with clear messages: `git commit -m "Add: feature description"`
6. Push to your fork: `git push origin feature/your-feature`
7. Open a Pull Request

**Code Style:**
- Use TypeScript for all new code
- Follow existing code patterns
- Add comments for complex logic
- Test with real Ethereum addresses

## License

MIT License - see [LICENSE](./LICENSE) file for details

## Support

For questions or support, contact: **support@walletping.io**

---

Built with ❤️ using Next.js and Ethereum
