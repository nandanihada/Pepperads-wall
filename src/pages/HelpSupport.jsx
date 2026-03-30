import React, { useState } from 'react';

const HelpSupport = () => {
  const [showFAQs, setShowFAQs] = useState(false);

  const faqs = [
    {
      question: 'How do I create a PepperAds account?',
      answer:
        'Visit pepperads-bb785.web.app and click “Start for Free.” Enter your email and follow the quick onboarding process — no credit card required.',
    },
    {
      question: 'How do I install the survey widget on my site?',
      answer:
        'After creating your survey, PepperAds gives you a code snippet. Copy and paste it into your website’s <head> or use integrations like Google Tag Manager, Webflow, or WordPress.',
    },
    {
      question: 'Do I need technical skills to use PepperAds?',
      answer:
        'No. The platform is designed to be user-friendly and code-free. But for advanced tracking or integrations, you can use tools like Make, Zapier, or connect with your developer.',
    },
    {
      question: 'Where can I contact support?',
      answer:
        'You can email us at support@pepperwahl.com or use the chat widget in your dashboard for live help.',
    },
    {
      question: 'My survey isn’t showing on my site. What should I do?',
      answer:
        'Ensure the code snippet is correctly placed in your site’s HTML. If using a CMS (like WordPress), check plugin compatibility or caching settings. Contact support if the issue persists.',
    },
    {
      question: 'How fast is support response time?',
      answer:
        'Our team usually replies within 1–4 hours during business days (Mon–Sat, 9AM to 9PM IST).',
    },
  ];

  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-red-500">Help</span> & Support
        </h1>
        <p className="text-gray-400 text-lg mb-12 animate-fade-in">
          Need a quick answer or technical help? We’ve got walkthroughs, FAQs, and live support to help you get unstuck fast.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'FAQs',
              desc: 'Quick answers to common questions about setup, forms, and dashboard usage.',
              onClick: () => setShowFAQs(!showFAQs),
            },
            {
              title: 'Integration Guides',
              desc: 'Step-by-step help on connecting CRMs, analytics, and tracking tools.',
            },
            {
              title: 'Live Chat',
              desc: 'Reach our support team in real time for urgent or technical issues.',
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={item.onClick}
              className={`bg-[#111] rounded-xl p-6 hover:shadow-red-500/30 transition-shadow shadow-md cursor-pointer`}
            >
              <h3 className="text-xl font-semibold text-red-400 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {showFAQs && (
          <div className="bg-[#1a1a1a] text-left rounded-xl p-6">
            <h2 className="text-2xl text-red-400 font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSupport;
