import Header from '@/components/Header';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - WalletPing',
  description: 'WalletPing Privacy Policy. Learn how we handle your data when tracking Ethereum wallet balances.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 19, 2025';
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
      <Header />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                WalletPing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website walletping.io (the &quot;Service&quot;). 
                This Privacy Policy explains how we collect, use, and protect your information when you use our crypto wallet tracking service.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We are committed to protecting your privacy. This Service is designed to be simple and privacy-focused, 
                requiring no accounts or personal information to use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy applies to information we collect through the Service. It does not apply to
                third-party websites or services that may be linked from the Service.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Wallet addresses and tracking data</h3>
              <p className="text-gray-300 leading-relaxed">
                When you track a wallet, we store the public Ethereum wallet address and balance snapshots in our database.
                Blockchain addresses are publicly visible on-chain; however, in some jurisdictions they may be considered
                personal data if they can be linked to an individual.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Usage data (analytics)</h3>
              <p className="text-gray-300 leading-relaxed">
                We collect anonymous usage data through Google Analytics, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Browser type and version</li>
                <li>Device type (mobile, desktop, tablet)</li>
                <li>Geographic location (country/city level)</li>
                <li>Referring website</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Technical data</h3>
              <p className="text-gray-300 leading-relaxed">
                We automatically collect certain technical information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
                <li>IP address (for rate limiting purposes only)</li>
                <li>Browser and operating system information</li>
                <li>Timestamps of requests</li>
              </ul>
            </section>

            {/* What We Don't Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information we do not collect</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>No accounts or login credentials</li>
                <li>No email addresses for using the Service (unless you contact support)</li>
                <li>No government-issued identifiers</li>
                <li>No private keys or wallet access</li>
                <li>No transaction history or blockchain activity</li>
                <li>No payment information</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use the collected information for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Providing the Service:</strong> Tracking wallet balances and displaying change history</li>
                <li><strong className="text-white">Service Improvement:</strong> Understanding how users interact with our platform</li>
                <li><strong className="text-white">Rate Limiting:</strong> Preventing abuse and ensuring fair usage</li>
                <li><strong className="text-white">Analytics:</strong> Measuring site performance and user engagement</li>
                <li><strong className="text-white">Security:</strong> Detecting and preventing malicious activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and similar technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service may use cookies and similar technologies, primarily through Google Analytics. You can control
                cookies through your browser settings and you can use browser extensions or settings to block analytics.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do not display a cookie banner at this time.
              </p>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Security</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Storage:</strong> Wallet addresses and balance snapshots are stored securely in our PostgreSQL database 
                with SSL encryption in transit. We retain tracking data for as long as needed to provide the Service, unless
                you request deletion.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong className="text-white">Security:</strong> We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
                <li>Encrypted HTTPS connections</li>
                <li>Secure database connections with SSL</li>
                <li>Regular security updates</li>
                <li>Rate limiting to prevent abuse</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                No method of transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use the following third-party services:</p>
              
              <h4 className="text-lg font-semibold text-white mb-2 mt-4">Google Analytics</h4>
              <p className="text-gray-300 leading-relaxed">
                For anonymous usage analytics. Google Analytics may use cookies. 
                Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Google Privacy Policy</a>
              </p>

              <h4 className="text-lg font-semibold text-white mb-2 mt-4">Alchemy API</h4>
              <p className="text-gray-300 leading-relaxed">
                For fetching Ethereum blockchain data. Wallet addresses are sent to Alchemy to retrieve balance information. 
                Learn more: <a href="https://www.alchemy.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Alchemy Privacy Policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How we share information</h2>
              <p className="text-gray-300 leading-relaxed">
                We may share information with service providers that help us operate the Service (for example, analytics
                and infrastructure providers). We do not sell personal information.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We may disclose information if required to comply with law, enforce our terms, or protect the rights,
                property, or safety of WalletPing, our users, or others.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Access:</strong> View what data we have stored (contact support)</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of tracking data for a specific wallet address</li>
                <li><strong className="text-white">Opt-out:</strong> Stop using the Service at any time</li>
                <li><strong className="text-white">Analytics Opt-out:</strong> Use browser extensions or settings to block Google Analytics</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, contact us at: <a href="mailto:support@walletping.io" className="text-cyan-400 hover:text-cyan-300 underline">support@walletping.io</a>
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect 
                information from children. If you are a parent and believe your child has provided information 
                to us, please contact us immediately.
              </p>
            </section>

            {/* International Users */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Users</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service is hosted in the United States. If you access our Service from outside the U.S., 
                your information may be transferred to, stored, and processed in the U.S. By using our Service, 
                you consent to this transfer.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with 
                an updated &quot;Last updated&quot; date. Continued use of the Service after changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">WalletPing</strong><br />
                Email: <a href="mailto:support@walletping.io" className="text-cyan-400 hover:text-cyan-300 underline">support@walletping.io</a><br />
                Website: <a href="https://walletping.io" className="text-cyan-400 hover:text-cyan-300 underline">walletping.io</a>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

