import Header from '@/components/Header';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - WalletPing',
  description: 'WalletPing Terms of Service. Read our terms and conditions for using our Ethereum wallet tracking service.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'December 19, 2025';
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
      <Header />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using WalletPing (&quot;Service&quot;), you agree to be bound by these Terms of Service 
                (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                WalletPing is operated by WalletPing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms 
                govern your use of our website at walletping.io and all related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
              <p className="text-gray-300 leading-relaxed">
                You must be legally capable of entering into these Terms under applicable law. If you are using the
                Service on behalf of an entity, you represent that you have authority to bind that entity to these Terms.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
              <p className="text-gray-300 leading-relaxed">
                WalletPing is a free tool that allows you to track Ethereum wallet balance changes. The Service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Displays current wallet balances from public blockchain data</li>
                <li>Tracks balance changes over time</li>
                <li>Shows historical snapshots of wallet balances</li>
                <li>Provides a simple interface for wallet monitoring</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong className="text-white">Important:</strong> We are a READ-ONLY tracking service. We never have 
                access to your private keys, cannot make transactions, and do not custody any cryptocurrency.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                The Service may change, suspend, or discontinue at any time. We do not guarantee that any historical
                snapshots will be available indefinitely.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">By using the Service, you agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to circumvent rate limits or security measures</li>
                <li>Not use automated tools to scrape or abuse the Service</li>
                <li>Not input wallet addresses you do not have permission to track</li>
                <li>Not use the Service to harass, stalk, or monitor others</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* No Account Required */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">No Account Required</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service does not require account creation. You can track any public Ethereum wallet address by 
                entering it into our interface. Since all wallet addresses are publicly visible on the Ethereum blockchain, 
                tracking them through our Service does not violate any privacy expectations.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Important Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">No Financial Advice</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                WalletPing is an informational tool only. We do not provide financial, investment, tax, or legal advice. 
                Nothing on this Service should be construed as a recommendation to buy, sell, or hold cryptocurrency.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">No Guarantees</h3>
              <p className="text-gray-300 leading-relaxed">
                We provide the Service &quot;AS IS&quot; without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2 mb-6">
                <li>100% uptime or availability</li>
                <li>Accuracy of balance information</li>
                <li>Real-time updates (data may have delays)</li>
                <li>Compatibility with all devices or browsers</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Data Accuracy</h3>
              <p className="text-gray-300 leading-relaxed">
                We fetch balance data from the Ethereum blockchain via third-party providers (Alchemy). While we 
                strive for accuracy, blockchain data may have delays or discrepancies. Always verify critical 
                information directly on the Ethereum blockchain or through multiple sources.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Cryptocurrency networks and third-party providers may experience outages, delays, forks, reorganizations,
                or other events outside our control that affect the data shown by the Service.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>We are not liable for any direct, indirect, incidental, special, or consequential damages</li>
                <li>We are not responsible for lost profits, data loss, or business interruption</li>
                <li>Our total liability shall not exceed $100 USD</li>
                <li>We are not liable for decisions you make based on information from our Service</li>
                <li>We are not responsible for third-party services (Alchemy, blockchain networks)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless WalletPing from and against any claims, liabilities, damages,
                losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your
                access to or use of the Service, your violation of these Terms, or your violation of any rights of a
                third party.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service, including its design, code, text, graphics, and logos, is owned by WalletPing and protected 
                by copyright and trademark laws. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Copy, modify, or distribute our code or design</li>
                <li>Use our name or logo without permission</li>
                <li>Create derivative works based on our Service</li>
                <li>Reverse engineer or decompile any part of the Service</li>
              </ul>
            </section>

            {/* Rate Limiting */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Rate Limiting and Fair Use</h2>
              <p className="text-gray-300 leading-relaxed">
                To ensure fair access for all users and prevent abuse, we implement rate limiting:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li><strong className="text-white">30 requests per minute</strong> per IP address for wallet pages</li>
                <li>Excessive use may result in temporary IP blocking</li>
                <li>Automated scraping or API abuse is prohibited</li>
                <li>We reserve the right to adjust limits at any time</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                For higher limits or questions, contact us at <a href="mailto:support@walletping.io" className="text-cyan-400 hover:text-cyan-300 underline">support@walletping.io</a>
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 font-medium underline">
                  Privacy Policy
                </Link>
                {' '}to understand how we collect and use information.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Key points:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
                <li>We do not require accounts or personal information</li>
                <li>We store wallet addresses and balance snapshots for tracking purposes</li>
                <li>We use Google Analytics for anonymous usage statistics</li>
                <li>We never have access to your private keys or funds</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service relies on third-party providers:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li><strong className="text-white">Alchemy:</strong> For blockchain data access</li>
                <li><strong className="text-white">Google Analytics:</strong> For usage analytics</li>
                <li><strong className="text-white">Ethereum Network:</strong> The blockchain itself</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We are not responsible for the availability, accuracy, or policies of these third-party services. 
                Their use is subject to their own terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service may contain links to third-party websites or services. We do not control and are not
                responsible for the content, policies, or practices of any third party. Access them at your own risk.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Suspend or terminate access to the Service at any time</li>
                <li>Remove or disable any tracked wallet data</li>
                <li>Discontinue the Service entirely without notice</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You may stop using the Service at any time. To request deletion of your tracked wallet data, 
                contact <a href="mailto:support@walletping.io" className="text-cyan-400 hover:text-cyan-300 underline">support@walletping.io</a>
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may modify these Terms at any time. Changes will be posted on this page with an updated 
                &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance 
                of the new Terms.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We recommend reviewing these Terms periodically for any updates.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by applicable laws, without regard to conflict of law principles. To the extent
                permitted by law, you agree that disputes will be brought in a competent court with jurisdiction over
                the parties.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue 
                in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and WalletPing
                regarding the Service and supersede any prior agreements on the subject.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Questions about these Terms? Contact us:
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

