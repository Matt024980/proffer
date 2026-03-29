import React from "react";
import "./landing_page.scss";

// ─── SVG Icons (inline, no external dep needed) ────────────────────────────
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconCar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconAnchor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconAward = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// ─── Data ───────────────────────────────────────────────────────────────────
const services = [
  { icon: <IconHeart />,     title: "Health Insurance",   desc: "Comprehensive medical cover for individuals and families. Access top hospitals with minimal out-of-pocket costs." },
  { icon: <IconCar />,       title: "Motor Insurance",    desc: "Third-party, comprehensive, and fleet cover tailored for Kenyan roads. Fast claims, no hassle." },
  { icon: <IconHome />,      title: "Property Insurance", desc: "Protect your home and commercial properties from fire, theft, and natural disasters." },
  { icon: <IconBriefcase />, title: "Business Insurance", desc: "End-to-end business risk solutions — from liability to employee benefits and beyond." },
  { icon: <IconAnchor />,    title: "Marine Insurance",   desc: "Cargo and hull cover for imports, exports, and inland transit across East Africa." },
  { icon: <IconShield />,    title: "Life Insurance",     desc: "Secure your family's future with term life, endowment, and investment-linked plans." },
];

const whyItems = [
  { icon: <IconLock />,   title: "Licensed & Regulated",      desc: "Fully authorised by the Insurance Regulatory Authority (IRA) of Kenya." },
  { icon: <IconClock />,  title: "Fast Claims Processing",     desc: "Our dedicated claims team ensures swift, transparent payouts — usually within 72 hours." },
  { icon: <IconAward />,  title: "Expert Risk Advisors",       desc: "Over a decade of insurance expertise helping clients find the right cover at the right price." },
  { icon: <IconUsers />,  title: "10,000+ Happy Clients",      desc: "Trusted by individuals, SMEs, and large corporates across Kenya and East Africa." },
];

// ─── Component ──────────────────────────────────────────────────────────────
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* ── NAVBAR ── */}
      <nav className="lp-nav">
        <a href="/" className="lp-nav__logo">
          <div className="lp-nav__logo-text">
            Proffer Insurance<span>Smart Risk Solutions</span>
          </div>
        </a>

        <ul className="lp-nav__links">
          {["Products", "About Us", "Claims", "Contact"].map((l) => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul>

        <button className="lp-nav__cta">Get a Quote</button>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero__shape lp-hero__shape--1" />
        <div className="lp-hero__shape lp-hero__shape--2" />
        <div className="lp-hero__shape lp-hero__shape--3" />
        <div className="lp-hero__panel" />

        <div className="lp-hero__inner">
          {/* Left copy */}
          <div className="lp-hero__copy">
            <p className="lp-hero__eyebrow">Kenya's Trusted Insurance Agency</p>
            <h1 className="lp-hero__headline">
              Insurance that puts <em>you</em> first.
            </h1>
            <p className="lp-hero__subtext">
              Proffer Insurance Agency delivers smart, personalised risk solutions for individuals and businesses across Kenya and East Africa.
            </p>
            <div className="lp-hero__actions">
              <button className="lp-hero__btn lp-hero__btn--primary">Get a Free Quote</button>
              <button className="lp-hero__btn lp-hero__btn--ghost">Our Products</button>
            </div>
          </div>

          {/* Right floating card */}
          <div className="lp-hero__visual">
            <div className="lp-hero__card">
              <div className="lp-hero__card-header">
                <div className="avatar">🛡️</div>
                <div>
                  <h4>Active Policy</h4>
                  <p>Comprehensive Cover</p>
                </div>
              </div>
              <div className="lp-hero__card-coverage">
                <label>Coverage Areas</label>
                <div className="coverage-pills">
                  {["Health", "Motor", "Property", "Marine"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="lp-hero__card-stat">
                <div>
                  <div className="stat-value">KES 5M</div>
                  <div className="stat-label">Total Coverage<br/>Value</div>
                </div>
                <span className="stat-badge">Active ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="lp-trust">
        {[
          { icon: <IconCheck />, text: "IRA Licensed & Regulated" },
          { icon: <IconPhone />, text: "24/7 Claims Support" },
          { icon: <IconStar />,  text: "4.9 / 5 Client Rating" },
          { icon: <IconShield />, text: "15+ Years of Experience" },
        ].map((item) => (
          <div className="lp-trust__item" key={item.text}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── STATS ── */}
      <section className="lp-stats">
        <div className="lp-stats__inner">
          {[
            { num: "10K+",  label: "Clients Covered" },
            { num: "98%",   label: "Claims Paid" },
            { num: "15+",   label: "Years Experience" },
            { num: "50+",   label: "Insurance Products" },
          ].map((s) => (
            <div className="lp-stats__item" key={s.label}>
              <div className="lp-stats__number">
                {s.num.replace(/\d+/, (n) => n)
                  .split("")
                  .map((c, i) => /\d/.test(c)
                    ? <span key={i}>{c}</span>
                    : c
                  )}
              </div>
              <div className="lp-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="lp-services">
        <div className="lp-services__inner">
          <div className="lp-services__header">
            <p className="lp-services__eyebrow">What We Offer</p>
            <h2 className="lp-services__title">
              Comprehensive cover<br />for every stage of life
            </h2>
          </div>
          <div className="lp-services__grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__arrow">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="lp-why">
        <div className="lp-why__inner">
          <div className="lp-why__left">
            <p className="lp-why__eyebrow">Why Proffer</p>
            <h2 className="lp-why__title">
              Risk management,<br />done right.
            </h2>
            <p className="lp-why__body">
              We go beyond selling policies — we build long-term partnerships, understand your unique risk exposure, and craft solutions that truly protect what matters most to you.
            </p>
            <button className="lp-why__btn">Meet Our Team</button>
          </div>
          <div className="lp-why__right">
            {whyItems.map((item) => (
              <div className="why-item" key={item.title}>
                <div className="why-item__icon">{item.icon}</div>
                <div className="why-item__text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="lp-cta">
        <div className="lp-cta__inner">
          <h2 className="lp-cta__title">Ready to secure your future?</h2>
          <p className="lp-cta__sub">Get a personalised quote in under 2 minutes. No commitment required.</p>
          <div className="lp-cta__actions">
            <button className="lp-cta__btn lp-cta__btn--white">Get a Free Quote</button>
            <button className="lp-cta__btn lp-cta__btn--outline">Call Us Now</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-footer__top">
          <div className="lp-footer__brand">
            <span className="lp-footer__logo-text">
              Proffer Insurance Agency<span>Smart Risk Solutions</span>
            </span>
            <p>Delivering smart, personalised insurance solutions across Kenya and East Africa since 2010.</p>
          </div>
          <div className="lp-footer__col">
            <h5>Products</h5>
            <ul>
              {["Health Insurance", "Motor Insurance", "Property Insurance", "Marine Insurance", "Life Insurance", "Business Insurance"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lp-footer__col">
            <h5>Company</h5>
            <ul>
              {["About Us", "Our Team", "Careers", "News & Blog", "CSR"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lp-footer__col">
            <h5>Support</h5>
            <ul>
              {["File a Claim", "Contact Us", "FAQs", "Client Portal", "Privacy Policy"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lp-footer__bottom">
          <p>© {new Date().getFullYear()} Proffer Insurance Agency. All rights reserved.</p>
          <div className="lp-footer__bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;