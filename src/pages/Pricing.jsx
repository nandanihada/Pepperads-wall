import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [billing, setBilling] = useState('monthly');

  const isLight = searchParams.get('theme') === 'light';

  const plans = [
    {
      name: 'Free',
      pepper: '/red_chilli.png',
      description: 'Everything you need to publish your first surveys.',
      price: billing === 'monthly' ? '₹0' : '₹0',
      priceSuffix: ' forever',
      priceNote: 'No credit card required',
      cta: 'Start for free',
      ctaStyle: 'border-2 border-red-500 text-red-500 hover:bg-red-500/10',
      popular: false,
      features: [
        '2 themes to brand your survey',
        'Publish via web link',
        'Share to social media',
        'Embed & add to websites',
        '24/7 email support',
      ],
    },
    {
      name: 'Premium',
      pepper: '/green_chilli.png',
      description: 'Logic, AI, and analysis that turn responses into decisions.',
      price: billing === 'monthly' ? '$25' : '$20',
      priceSuffix: ' per month',
      priceNote: billing === 'annual' ? 'billed annually' : 'billed monthly',
      cta: 'Choose Premium',
      ctaStyle: 'bg-red-500 text-white hover:bg-red-600',
      popular: true,
      prefix: 'EVERYTHING IN FREE, PLUS',
      features: [
        'Advanced logic features',
        'Analyze with AI',
        'Statistical significance',
        'Multilingual surveys',
        'Data exports — CSV, XLS, PPT, PDF',
        'User accounts & roles',
        'Priority phone support',
      ],
    },
    {
      name: 'Enterprise',
      pepper: '/yellow_chilli.png',
      description: 'Governance, targeting, and team workflows at scale.',
      price: 'Custom',
      priceSuffix: '',
      priceNote: 'tailored to your team',
      cta: 'Contact sales',
      ctaStyle: 'border-2 border-stone-400 text-stone-300 hover:bg-stone-800/50',
      popular: false,
      prefix: 'EVERYTHING IN PREMIUM, PLUS',
      features: [
        'Roles, workgroups & permissions',
        'Multi-survey analysis',
        'Advanced branching & skip logic',
        'Response quotas & recurring surveys',
        'Popup targeting & email tracking',
        'Mobile SDK — act on responses',
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'}`}>
      {/* Header */}
      <div className="text-center pt-10 sm:pt-16 pb-8 sm:pb-12 px-4">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 ${
            isLight ? 'bg-stone-100 border border-stone-200' : 'bg-slate-800 border border-slate-700'
          }`}
        >
          <img src="/logo.png" alt="" className="w-4 h-4 object-contain" />
          <span
            className={`text-[11px] font-bold tracking-widest uppercase ${
              isLight ? 'text-stone-600' : 'text-slate-300'
            }`}
          >
            Simple, Spicy Pricing
          </span>
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 ${
            isLight ? 'text-slate-900' : ''
          }`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Pick Your <span className="text-red-500">Pepper</span>
        </h1>

        <p
          className={`text-xs sm:text-sm md:text-base max-w-md mx-auto ${
            isLight ? 'text-stone-500' : 'text-slate-400'
          }`}
        >
          From solo creators to enterprise teams — every plan is packed with flavor. No hidden costs, no surprises.
        </p>

        {/* Billing toggle */}
        <div
          className={`flex items-center justify-center gap-1 mt-6 sm:mt-8 rounded-full p-1 w-fit mx-auto ${
            isLight ? 'bg-stone-100' : 'bg-slate-800'
          }`}
        >
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              billing === 'monthly'
                ? 'bg-red-500 text-white'
                : isLight
                ? 'text-stone-500 hover:text-stone-800'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              billing === 'annual'
                ? 'bg-red-500 text-white'
                : isLight
                ? 'text-stone-500 hover:text-stone-800'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual{' '}
            <span className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] ${
              plan.popular
                ? isLight
                  ? 'bg-white border-2 border-red-200 shadow-lg'
                  : 'bg-slate-800 border-2 border-slate-600 ring-1 ring-red-500/20'
                : isLight
                ? 'bg-white border border-stone-200 shadow-sm hover:border-stone-300'
                : 'bg-slate-900 border border-slate-800 hover:border-slate-600'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                Most Popular
              </div>
            )}

            {/* Pepper image */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5">
              <img src={plan.pepper} alt={plan.name} className="w-full h-full object-contain" />
            </div>

            {/* Plan name & description */}
            <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {plan.name}
            </h3>
            <p className={`text-xs mb-4 sm:mb-5 ${isLight ? 'text-stone-500' : 'text-slate-400'}`}>
              {plan.description}
            </p>

            {/* Price */}
            <div className="mb-1">
              <span className={`text-2xl sm:text-3xl font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {plan.price}
              </span>
              <span className={`text-xs sm:text-sm ml-1 ${isLight ? 'text-stone-500' : 'text-slate-400'}`}>
                {plan.priceSuffix}
              </span>
            </div>
            <p className={`text-[11px] mb-5 sm:mb-6 ${isLight ? 'text-stone-400' : 'text-slate-500'}`}>
              {plan.priceNote}
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                if (plan.name === 'Free') {
                  window.open('https://survey.pepperwahl.com/create-survey', '_blank', 'noopener,noreferrer');
                } else if (plan.name === 'Premium') {
                  window.open('https://survey.pepperwahl.com/upgrade', '_blank', 'noopener,noreferrer');
                } else if (plan.name === 'Enterprise') {
                  window.location.href = 'mailto:business@moustacheleads.com';
                }
              }}
              className={`w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${plan.ctaStyle}`}
            >
              {plan.cta}
            </button>

            {/* Features */}
            <div className={`mt-5 sm:mt-6 pt-5 sm:pt-6 border-t ${isLight ? 'border-stone-100' : 'border-slate-700/50'}`}>
              {plan.prefix && (
                <p
                  className={`text-[10px] font-bold tracking-wider uppercase mb-3 ${
                    isLight ? 'text-stone-400' : 'text-slate-500'
                  }`}
                >
                  {plan.prefix}
                </p>
              )}
              {!plan.prefix && (
                <p
                  className={`text-[10px] font-bold tracking-wider uppercase mb-3 ${
                    isLight ? 'text-stone-400' : 'text-slate-500'
                  }`}
                >
                  What's included:
                </p>
              )}
              <ul className="space-y-2 sm:space-y-2.5">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] ${
                      isLight ? 'text-stone-700' : 'text-slate-300'
                    }`}
                  >
                    <Check size={14} className="text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Compare Features Section */}
      <CompareFeatures isLight={isLight} />
    </div>
  );
};

const CompareFeatures = ({ isLight }) => {
  const [expanded, setExpanded] = useState(false);

  const featureData = [
    {
      category: 'CREATE & DESIGN',
      features: [
        { name: 'Themes', free: '2 themes', premium: 'All themes', enterprise: 'All themes' },
        { name: 'Premium themes', free: false, premium: true, enterprise: true },
        { name: 'Advanced logic features', free: false, premium: true, enterprise: true },
        { name: 'Advanced branching', free: false, premium: false, enterprise: true },
        { name: 'Skip logic for questions & pages', free: false, premium: false, enterprise: true },
        { name: 'Custom thank-you page', free: false, premium: false, enterprise: true },
      ],
    },
    {
      category: 'SHARE & COLLECT',
      features: [
        { name: 'Publish via web link', free: true, premium: true, enterprise: true },
        { name: 'Share to social media', free: true, premium: true, enterprise: true },
        { name: 'Add to websites', free: true, premium: true, enterprise: true },
        { name: 'QR codes', free: false, premium: true, enterprise: true },
        { name: 'Multilingual surveys', free: false, premium: true, enterprise: true },
        { name: 'Password-protected surveys', free: false, premium: true, enterprise: true },
        { name: 'Email invitations', free: false, premium: true, enterprise: true },
        { name: 'View, allow, or block IP addresses', free: false, premium: true, enterprise: true },
        { name: 'Targeting for popup surveys', free: false, premium: false, enterprise: true },
        { name: 'Recurring surveys', free: false, premium: false, enterprise: true },
        { name: 'Response quotas', free: false, premium: false, enterprise: true },
      ],
    },
    {
      category: 'FOLLOW-UP & REMINDERS',
      features: [
        { name: 'Confirmation email to respondents', free: 'Coming', premium: true, enterprise: true },
        { name: 'Schedule reminders by email', free: false, premium: true, enterprise: true },
        { name: 'Track email opens, clicks & response rates', free: false, premium: false, enterprise: true },
      ],
    },
    {
      category: 'ANALYZE',
      features: [
        { name: 'Analyze with AI', free: false, premium: true, enterprise: true },
        { name: 'Statistical significance', free: false, premium: true, enterprise: true },
        { name: 'Customize chart colors', free: false, premium: true, enterprise: true },
        { name: 'Data exports', free: false, premium: true, enterprise: true },
        { name: 'Print / export CSV, XLS, PPT, PDF', free: false, premium: true, enterprise: true },
        { name: 'Multi-survey analysis', free: false, premium: false, enterprise: true },
        { name: 'Flag poor-quality responses', free: false, premium: false, enterprise: true },
        { name: 'Share links to survey data', free: true, premium: true, enterprise: true },
        { name: 'iOS & Android apps for analysis', free: true, premium: true, enterprise: true },
      ],
    },
    {
      category: 'TEAM & SECURITY',
      features: [
        { name: 'User accounts & roles', free: false, premium: true, enterprise: true },
        { name: 'Assign roles with workgroups', free: false, premium: false, enterprise: true },
        { name: 'Tag people in comments', free: false, premium: false, enterprise: true },
        { name: 'Password protection for dashboards', free: false, premium: false, enterprise: true },
        { name: 'Mobile SDK — take action on responses', free: false, premium: false, enterprise: true },
      ],
    },
    {
      category: 'SUPPORT',
      features: [
        { name: '24/7 email support', free: true, premium: true, enterprise: true },
        { name: 'Phone support', free: false, premium: true, enterprise: true },
        { name: 'Priority phone support', free: false, premium: false, enterprise: true },
      ],
    },
  ];

  const renderCell = (value) => {
    if (value === true) return <Check size={16} className="text-green-500 mx-auto" />;
    if (value === false) return <span className="text-stone-400">—</span>;
    return <span className={`text-xs ${isLight ? 'text-stone-600' : 'text-slate-400'}`}>{value}</span>;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="text-center mb-8">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isLight ? 'text-stone-900' : 'text-white'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
          Compare every feature
        </h2>
        <p className={`text-sm ${isLight ? 'text-stone-500' : 'text-slate-400'}`}>
          The headline features are above. Expand to see the full list, line by line.
        </p>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-all ${
            isLight
              ? 'border-stone-300 text-stone-700 hover:bg-stone-50'
              : 'border-slate-600 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {expanded ? 'Show fewer features' : 'Show all features'}
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className={`rounded-2xl overflow-hidden border ${isLight ? 'border-stone-200' : 'border-slate-700'}`}>
          {/* Table Header */}
          <div className={`grid grid-cols-4 ${isLight ? 'bg-slate-800 text-white' : 'bg-slate-800 text-white'}`}>
            <div className="p-3 sm:p-4 text-xs sm:text-sm font-semibold">Feature</div>
            <div className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-center">Free</div>
            <div className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-center text-green-400">Premium</div>
            <div className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-center">Enterprise</div>
          </div>

          {/* Feature Rows */}
          {featureData.map((section) => (
            <div key={section.category}>
              {/* Category Header */}
              <div className={`px-3 sm:px-4 py-2.5 ${isLight ? 'bg-stone-100' : 'bg-slate-900'}`}>
                <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${isLight ? 'text-stone-500' : 'text-slate-500'}`}>
                  {section.category}
                </p>
              </div>

              {/* Feature Rows */}
              {section.features.map((feature, idx) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-4 ${
                    isLight
                      ? idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                      : idx % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-900'
                  } ${isLight ? 'border-t border-stone-100' : 'border-t border-slate-800'}`}
                >
                  <div className={`p-3 sm:p-4 text-xs sm:text-[13px] ${isLight ? 'text-stone-700' : 'text-slate-300'}`}>
                    {feature.name}
                  </div>
                  <div className="p-3 sm:p-4 text-center flex items-center justify-center">
                    {renderCell(feature.free)}
                  </div>
                  <div className="p-3 sm:p-4 text-center flex items-center justify-center">
                    {renderCell(feature.premium)}
                  </div>
                  <div className="p-3 sm:p-4 text-center flex items-center justify-center">
                    {renderCell(feature.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pricing;
