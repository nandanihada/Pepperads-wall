import { useState, useEffect } from 'react';

const INFO_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
.pw-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
.pw-bg { background-color: #fafaf9; }
.pw-rule { border-color: #e8e4df; }
.pw-muted { color: #8a8078; }
.pw-body { color: #2a2018; }
.pw-ledger-row { border-bottom: 1px solid #e0d9d0; }
.pw-ledger-row:last-child { border-bottom: none; }
.pw-range { -webkit-appearance: none; appearance: none; width: 100%; height: 2px; background: #e8e4df; outline: none; cursor: pointer; border-radius: 2px; }
.pw-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #c0392b; border: 2px solid #fafaf9; box-shadow: 0 1px 4px rgba(0,0,0,.18); cursor: pointer; }
.pw-range::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #c0392b; border: 2px solid #fafaf9; box-shadow: 0 1px 4px rgba(0,0,0,.18); cursor: pointer; }
.pw-range::-webkit-slider-runnable-track { background: transparent; }
`;

export default function ReferAndEarn({
  signupUrl = 'https://survey.pepperwahl.com/signup',
}) {
  const [clicks, setClicks]        = useState(500);
  const [signupRate, setSignupRate] = useState(4);
  const [subRate, setSubRate]       = useState(10);
  const [annualPct, setAnnualPct]   = useState(20);
  const [tick, setTick]             = useState(0);

  const ledgerItems = [
    { label: 'Click from New Delhi',  time: '02:48 IST',  detail: null,          amount: '+€0.02', amtCls: 'text-red-600' },
    { label: 'Signup confirmed',      time: null,         detail: 'priya.n@···', amount: '+€0.70', amtCls: 'text-red-600' },
    { label: 'Monthly plan started',  time: null,         detail: 'recurring',   amount: '+€4.00', amtCls: 'text-red-600' },
    { label: 'Annual plan started',   time: null,         detail: 'one payment', amount: '+€40.00',amtCls: 'text-red-600' },
  ];

  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % ledgerItems.length), 2200);
    return () => clearInterval(id);
  }, []);

  const signups     = Math.round(clicks * signupRate / 100);
  const subs        = Math.round(signups * subRate / 100);
  const annualSubs  = Math.round(subs * annualPct / 100);
  const monthlySubs = subs - annualSubs;
  const totalFirst  = clicks * 0.02 + signups * 0.70 + monthlySubs * 4.00 + annualSubs * 40.00;
  const recurring   = monthlySubs * 4.00;

  const tiers = [
    { amount: '€0.02', amtCls: 'text-stone-700', label: 'Per click',    desc: 'Someone opens Pepperwahl through your link.',    badge: null },
    { amount: '€0.70', amtCls: 'text-red-600',   label: 'Per signup',   desc: 'They create an account and confirm their email.', badge: null },
    { amount: '€4',    amtCls: 'text-red-700',   label: 'Monthly plan', desc: 'Paid again every month their plan stays active.', badge: '↺ RECURRING' },
    { amount: '€40',   amtCls: 'text-amber-700', label: 'Annual plan',  desc: 'Paid when someone takes a yearly subscription.',  badge: null },
  ];

  return (
    <div className="pw-bg pw-body" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{INFO_STYLES}</style>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="max-w-2xl pt-10 sm:pt-16 pb-10 sm:pb-12">
          <p className="pw-muted text-[11px] tracking-[0.2em] uppercase mb-6 sm:mb-8 font-medium">Pepperwahl &nbsp;·&nbsp; Partner Program</p>
          <h1 className="pw-serif pw-body leading-[1.08] font-bold mb-4 sm:mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Share a link. Get paid{' '}
            <em className="not-italic text-red-600 pw-serif" style={{ fontStyle: 'italic' }}>every month</em>{' '}
            it keeps working.
          </h1>
          <p className="pw-muted text-sm sm:text-base leading-relaxed max-w-lg">
            You post your link. People click it, sign up, subscribe. Each of those steps pays — and the subscription keeps paying for as long as it runs.
          </p>
        </div>

        {/* Live ledger widget */}
        <div className="border pw-rule rounded-sm mb-12 sm:mb-16 overflow-hidden" style={{ background: '#f7f6f4' }}>
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b" style={{ borderColor: '#e8e4df' }}>
            <span className="pw-muted text-[11px] tracking-[0.15em] uppercase font-medium">
              Partner Ledger &nbsp;·&nbsp; <span className="pw-body font-semibold">ABC123</span>
            </span>
            <span className="flex items-center gap-1.5 text-[11px] tracking-wider text-red-600 font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />Live
            </span>
          </div>
          {ledgerItems.map((item, i) => (
            <div
              key={i}
              className="pw-ledger-row flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-500"
              style={{ opacity: i <= tick ? 1 : 0.22 }}
            >
              <span className="text-xs sm:text-sm pw-body font-normal" style={{ fontFamily: "'Courier New', monospace" }}>{item.label}</span>
              <div className="flex items-center gap-4 sm:gap-8">
                {item.time   && <span className="pw-muted text-xs font-mono hidden sm:block">{item.time}</span>}
                {item.detail && <span className="pw-muted text-xs font-mono hidden sm:block">{item.detail}</span>}
                <span className={`text-xs sm:text-sm font-mono font-semibold tabular-nums ${item.amtCls}`}>{item.amount}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-t pw-rule">
            <span className="pw-muted text-[11px] tracking-[0.15em] uppercase font-medium">Today</span>
            <span className="text-sm font-mono font-bold pw-body tabular-nums">€44.72</span>
          </div>
        </div>

        <hr className="pw-rule mb-12 sm:mb-16" />

        {/* Four tiers */}
        <div className="mb-12 sm:mb-16">
          <p className="pw-muted text-[11px] tracking-[0.2em] uppercase font-medium mb-4">What each step pays</p>
          <h2 className="pw-serif pw-body font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}>Four ways your link earns</h2>
          <p className="pw-muted text-sm mb-8 sm:mb-10 max-w-md">They stack. One person who clicks, signs up and subscribes pays you all three.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border pw-rule overflow-hidden rounded-sm" style={{ background: '#e8e4df' }}>
            {tiers.map(t => (
              <div key={t.label} className="pw-bg p-5 sm:p-7 flex flex-col gap-3 relative">
                {t.badge && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-widest font-bold text-red-500 uppercase">{t.badge}</span>
                )}
                <p className={`pw-serif font-bold tabular-nums leading-none ${t.amtCls}`} style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>{t.amount}</p>
                <p className="pw-body text-sm font-semibold">{t.label}</p>
                <p className="pw-muted text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <div className="mb-12 sm:mb-16">
          <p className="pw-muted text-[11px] tracking-[0.2em] uppercase font-medium mb-4">Run your own numbers</p>
          <h2 className="pw-serif pw-body font-bold mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>What a month could look like</h2>
          <p className="pw-muted text-sm mb-8 sm:mb-10">Drag to match the audience you actually have.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              {[
                { label: 'Clicks on your link',            val: clicks,     set: setClicks,      min: 10,  max: 5000, step: 10, display: clicks.toString(),  hint: 'People who open Pepperwahl through you, per month.' },
                { label: 'Of those, how many sign up',     val: signupRate, set: setSignupRate,  min: 1,   max: 30,   step: 1,  display: `${signupRate}%`,    hint: 'A well-matched audience usually lands between 2% and 8%.' },
                { label: 'Of signups, how many subscribe', val: subRate,    set: setSubRate,     min: 1,   max: 50,   step: 1,  display: `${subRate}%`,       hint: 'The rest still earned you the click and signup.' },
                { label: 'Annual plans among subscribers', val: annualPct,  set: setAnnualPct,   min: 0,   max: 100,  step: 5,  display: `${annualPct}%`,     hint: 'Annual pays €40 at once; monthly pays €4 and repeats.' },
              ].map(({ label, val, set, min, max, step, display, hint }) => (
                <div key={label}>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="pw-body text-sm font-medium">{label}</span>
                    <span className="pw-serif font-bold tabular-nums text-red-600" style={{ fontSize: '1.1rem' }}>{display}</span>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))} className="pw-range" />
                  <p className="pw-muted text-xs mt-2">{hint}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="border pw-rule p-5 sm:p-7 flex-1" style={{ background: '#f7f6f4' }}>
                <p className="pw-muted text-[11px] tracking-[0.18em] uppercase font-medium mb-4 sm:mb-5">First month</p>
                <p className="pw-serif pw-body font-bold tabular-nums mb-5 sm:mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>€{totalFirst.toFixed(2)}</p>
                <div className="space-y-2.5 border-t pw-rule pt-4 sm:pt-5">
                  {[
                    ['Clicks',        `€${(clicks * 0.02).toFixed(2)}`],
                    ['Signups',       `€${(signups * 0.70).toFixed(2)}`],
                    ['Monthly plans', `€${(monthlySubs * 4.00).toFixed(2)}`],
                    ['Annual plans',  `€${(annualSubs * 40.00).toFixed(2)}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="pw-muted text-sm">{k}</span>
                      <span className="pw-body text-sm font-mono tabular-nums font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-red-200 p-4 sm:p-6" style={{ background: '#fdf2f0' }}>
                <p className="text-[11px] tracking-[0.18em] text-red-500 uppercase font-medium mb-2">Recurring, month after month</p>
                <p className="pw-serif text-red-700 font-bold tabular-nums" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>€{recurring.toFixed(2)}</p>
                <p className="text-red-400 text-xs mt-1.5">From monthly plans, while they stay active.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-12 sm:mb-16">
          <h2 className="pw-serif pw-body font-bold mb-8 sm:mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}>Three steps, about five minutes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border pw-rule overflow-hidden rounded-sm" style={{ background: '#e8e4df' }}>
            {[
              { step: '01', title: 'Get your link',           body: 'Sign up as a partner and your link is ready immediately — survey.pepperwahl.com with your code on the end.' },
              { step: '02', title: 'Put it where people are', body: 'A newsletter, a community, a YouTube description, a class you teach. It works best where people already trust you.' },
              { step: '03', title: 'Watch the ledger',        body: 'Your dashboard shows clicks, signups and active plans as they happen. Withdraw whenever your balance clears.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="pw-bg p-5 sm:p-7">
                <p className="text-[10px] tracking-[0.2em] font-bold text-red-500 uppercase mb-4">Step {step}</p>
                <h3 className="pw-serif pw-body font-bold text-base sm:text-lg mb-3">{title}</h3>
                <p className="pw-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <div className="mb-12 sm:mb-16 border-t pw-rule pt-8 sm:pt-10">
          <p className="pw-muted text-[11px] tracking-[0.18em] uppercase font-medium mb-4">Good to know</p>
          <ul className="space-y-2.5">
            {[
              'Signup bonuses are confirmed 14 days after the account is created.',
              'A signup counts once the person confirms their email address.',
              'Duplicate or automated signups are not eligible.',
              'Monthly credit continues while the plan is active and stops when it ends.',
              'Earnings are shown in euros; payouts follow your selected method.',
              'Full partner terms are provided when you join.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 pw-muted text-sm">
                <span className="mt-1 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="py-12 sm:py-16 text-center border-t pw-rule">
          <h2 className="pw-serif pw-body font-bold mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>Your link is one form away</h2>
          <p className="pw-muted text-sm mb-6 sm:mb-8">Free to join. No minimum audience, no exclusivity, no lock-in.</p>
          <a
            href={signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 sm:px-9 py-3.5 sm:py-4 text-white text-sm font-semibold tracking-wide transition-all"
            style={{ background: '#c0392b', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a93226')}
            onMouseLeave={e => (e.currentTarget.style.background = '#c0392b')}
          >
            Become a partner
          </a>
        </div>
      </div>
    </div>
  );
}
