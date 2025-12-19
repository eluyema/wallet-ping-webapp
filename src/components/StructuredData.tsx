export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'WalletPing',
    applicationCategory: 'FinanceApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Track your Ethereum wallet balance changes with calm, simple updates. No accounts required.',
    url: 'https://walletping.io',
    screenshot: 'https://walletping.io/logo.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
    featureList: [
      'Track Ethereum wallet balances',
      'Balance change detection',
      'Historical snapshots',
      'No account required',
      'Free to use',
    ],
    operatingSystem: 'Web',
    softwareVersion: '1.0',
    author: {
      '@type': 'Organization',
      name: 'WalletPing',
      url: 'https://walletping.io',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WalletPing',
    url: 'https://walletping.io',
    logo: {
      '@type': 'ImageObject',
      url: 'https://walletping.io/app-icon.png',
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@walletping.io',
      contactType: 'Customer Support',
    },
    sameAs: [],
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://walletping.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Crypto Wallet Tracker',
        item: 'https://walletping.io/crypto-wallet-tracker',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}

