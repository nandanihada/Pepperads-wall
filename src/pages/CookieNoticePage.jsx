import React from 'react';
import { openCookiePreferences } from '../components/CookieConsent';

const CookieNoticePage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white border-b border-stone-200 sticky top-[56px] sm:top-[64px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Legal</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2" style={{ fontFamily: "'Outfit','Inter',sans-serif" }}>Cookie Notice</h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">Effective date: July 19, 2026 &nbsp;|&nbsp; Last updated: July 19, 2026 &nbsp;|&nbsp; Version: 1.0</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-14">

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">1. What Are Cookies?</h2>
            <p className="text-[14px] text-stone-600 leading-relaxed">Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, keep you logged in, and understand how you use the site.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">2. Cookies We Use</h2>
            <div className="overflow-x-auto rounded-lg border border-stone-200">
              <table className="w-full text-[13px]">
                <thead><tr className="bg-red-50 text-red-800"><th className="p-3 text-left font-semibold">Cookie</th><th className="p-3 text-left font-semibold">Purpose</th><th className="p-3 text-left font-semibold">Duration</th><th className="p-3 text-left font-semibold">Type</th></tr></thead>
                <tbody className="text-stone-600">
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_session</td><td className="p-3">Login session & authentication</td><td className="p-3">Session</td><td className="p-3"><span className="text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-[11px]">Essential</span></td></tr>
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_csrf</td><td className="p-3">CSRF protection</td><td className="p-3">Session</td><td className="p-3"><span className="text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-[11px]">Essential</span></td></tr>
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_ballot</td><td className="p-3">Prevent duplicate survey responses</td><td className="p-3">30 days</td><td className="p-3"><span className="text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-[11px]">Essential</span></td></tr>
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_prefs</td><td className="p-3">Language, timezone preferences</td><td className="p-3">1 year</td><td className="p-3"><span className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-[11px]">Functional</span></td></tr>
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_analytics</td><td className="p-3">Page views, feature usage, sessions</td><td className="p-3">2 years</td><td className="p-3"><span className="text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded text-[11px]">Analytics</span></td></tr>
                  <tr className="border-t border-stone-100"><td className="p-3 font-mono text-xs">_pw_mkt</td><td className="p-3">Ads, campaign performance</td><td className="p-3">90 days</td><td className="p-3"><span className="text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded text-[11px]">Marketing</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">3. Cookie Categories</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-sm font-bold text-green-800 mb-1">Essential Cookies</h3>
                <p className="text-[13px] text-green-700">Required for the site to function. Cannot be disabled. Include login sessions, security tokens, and ballot-stuffing prevention.</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-sm font-bold text-blue-800 mb-1">Functional Cookies</h3>
                <p className="text-[13px] text-blue-700">Remember your preferences like language and timezone. Not strictly necessary but improve your experience.</p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="text-sm font-bold text-purple-800 mb-1">Analytics Cookies</h3>
                <p className="text-[13px] text-purple-700">Help us understand how you use the platform so we can improve it. Data is aggregated and anonymized.</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="text-sm font-bold text-orange-800 mb-1">Marketing Cookies</h3>
                <p className="text-[13px] text-orange-700">Used to measure advertising campaign effectiveness. You can opt out at any time.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">4. Managing Your Preferences</h2>
            <p className="text-[14px] text-stone-600 leading-relaxed mb-4">You can manage your cookie preferences at any time:</p>
            <ul className="list-disc pl-6 space-y-2 text-[14px] text-stone-600 mb-6">
              <li>Click the button below to open the cookie preferences panel</li>
              <li>Use your browser settings to block or delete cookies</li>
              <li>Note that blocking essential cookies may prevent the site from working</li>
            </ul>
            <button
              onClick={openCookiePreferences}
              className="px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Manage Cookie Preferences
            </button>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">5. Third-Party Cookies</h2>
            <p className="text-[14px] text-stone-600 leading-relaxed">We may use third-party services (e.g., analytics providers, advertising networks) that set their own cookies. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">6. Contact Us</h2>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-6">
              <p className="text-[14px] text-stone-700 font-semibold mb-1">Survtit Market Research Survey LLP</p>
              <p className="text-[13px] text-stone-600">Product: Pepperwahl &nbsp;|&nbsp; LLPIN: ACB-8160</p>
              <p className="text-[13px] text-stone-600 mt-2">Email: privacy@pepperwahl.com</p>
            </div>
            <p className="text-xs text-stone-400 mt-6 text-center">&copy; 2026 Survtit Market Research Survey LLP (Pepperwahl). All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieNoticePage;
