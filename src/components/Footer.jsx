// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Product */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="/overview" className="hover:text-red-500">Overview</a></li>
            <li><a href="/formbuilder" className="hover:text-red-500">Form Builder</a></li>
            <li><a href="/uploadpdf" className="hover:text-red-500">Upload PDFs</a></li>
            <li><a href="/aisurveytool" className="hover:text-red-500">AI Survey Tool</a></li>
            <li><a href="/logicrules" className="hover:text-red-500">Logic Rules (Coming Soon)</a></li>
            <li><a href="/analytics" className="hover:text-red-500">Analytics (Coming Soon)</a></li>
            <li><a href="/partnertools" className="hover:text-red-500">Partner Tools</a></li>
            <li><a href="/publishersuite" className="hover:text-red-500">Publisher Suite</a></li>
            <li><a href="/smartrouting" className="hover:text-red-500">Smart Response Routing</a></li>
           

          </ul>
        </div>

        {/* Templates */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Templates</h3>
          <ul className="space-y-2">
            <li><a href="/customer-feedback" className="hover:text-red-500">Customer Feedback</a></li>
            <li><a href="/employee-review" className="hover:text-red-500">Employee Review</a></li>
            <li><a href="/marketsurvey" className="hover:text-red-500">Marketing Survey</a></li>
            <li><a href="/event-signup" className="hover:text-red-500">Event Signup</a></li>
            <li><a href="/alltemplates" className="hover:text-red-500">All Templates</a></li>
            <li><a href="/monetizationtemplates" className="hover:text-red-500">Monetization Templates</a></li>
            <li><a href="/leadmagnetforms" className="hover:text-red-500">Lead Magnet Forms
            </a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/resourceshub" className="hover:text-red-500">Resource Center</a></li>
            <li><a href="/blog" className="hover:text-red-500">Blog</a></li>
            <li><a href="/helpsupport" className="hover:text-red-500">Help & Support</a></li>
            <li><a href="/contactus" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="/monetization" className="hover:text-red-500">Survey Monetization</a></li>
            <li><a href="/communityshowcases" className="hover:text-red-500">Community Showcases
            </a></li>
            <li><a href="/plan" className="hover:text-red-500">Choose plan</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="/how-to-build" className="hover:text-red-500">How to Build a Survey</a></li>
            <li><a href="/ai-creator" className="hover:text-red-500">How to Use AI Form Creator</a></li>
            <li><a href="/tips" className="hover:text-red-500">Survey Tips</a></li>
            <li><a href="/best-practices" className="hover:text-red-500">Best Practices</a></li>
            <li><a href="/grow-revenue" className="hover:text-red-500">Grow with Survey Revenue</a></li>
            <li><a href="/ai-prompts" className="hover:text-red-500">AI Prompts Library</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="/ourvision" className="hover:text-red-500">Our Vision</a></li>
            <li><a href="/meettheteam" className="hover:text-red-500">Meet the Team</a></li>
            <li><a href="/careers" className="hover:text-red-500">Careers(We're Hiring!)</a></li>
            <li><a href="/privacyandterms" className="hover:text-red-500">Privacy & Terms</a></li>
            <li><a href="/partnerships" className="hover:text-red-500">Partnerships</a></li>
            <li><a href="/creator-spotlight" className="hover:text-red-500">Creator Spotlight
            </a></li>
          </ul>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex space-x-6 text-lg text-gray-400">
          <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
          <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
          <a href="https://x.com" target="_blank"><FaXTwitter /></a>
          
          <li><a href="/grow-revenue" className="hover:text-red-500">Grow with Survey Revenue</a></li>
        </div>
        <p className="text-gray-500 text-sm">© 2025 PepperAds. All rights reserved.</p>
        <a href="/termandcon.html">Terms of Use</a>

      </div>
    </footer>
  );
};

export default Footer;
