"use client";

import { useEffect } from "react";

const benefitItems = [
  {
    title: "Pets",
    body: "Traveling with pets on a private jet means comfort and peace of mind for both owners and their companions. Our dedicated team ensures seamless arrangements, from documentation and safety to onboard care, so that your pet enjoys the same level of attention and luxury as you do. Every detail is managed to create a stress-free and enjoyable journey for everyone on board.",
  },
  {
    title: "24/7 availability",
    body: "Our team is available around the clock to handle any request, no matter the time zone or urgency. From last-minute flight arrangements to personalized services, we provide seamless support whenever you need it.",
  },
  {
    title: "Onboard services",
    body: "Every flight is tailored with a range of personalized onboard services designed to elevate your journey. From fine dining and curated entertainment to attentive crew and seamless connectivity, every detail is arranged to ensure maximum comfort and enjoyment in the air.",
  },
  {
    title: "Efficient",
    body: "Efficiency is at the core of every flight we operate. From optimized routes and streamlined procedures to quick boarding and smooth ground handling, we make sure your time is always used wisely.",
  },
];

const specs = [
  ["Maximum operating range", "11,263 km"],
  ["Speed", "480 knots"],
  ["Passenger capacity", "Up to 12 seats (+1 cabin server)"],
  ["Endurance", "14 hrs (maximum for European based aircraft)"],
  ["Baggage capacity", "5.52 m³"],
  ["Cruising altitude", "15,544 m"],
  ["Cabin length", "14.05 m²"],
  ["Cabin width", "2.49 m²"],
  ["Cabin height", "1.92 m²"],
];

const cities = [
  "Tokyo", "Miami", "Abu Dhabi", "Mexico City", "Marrakech", "Zurich", "Lagos", "Dubai", "Riyadh", "Seoul", "Doha", "Toronto", "Shanghai", "Geneva", "Melbourne", "Bangkok", "Cairo", "Hong Kong", "Tel Aviv", "Cape Town", "Los Angeles", "Paris", "Sydney", "Berlin", "São Paulo", "Nice", "Milan", "New York", "Singapore", "Mykonos", "London",
];

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.18 },
    );
    revealTargets.forEach((el) => observer.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const h = window.innerHeight;
      const heroProgress = Math.min(1, Math.max(0, y / (h * 0.95)));
      const flight = document.getElementById("flight");
      const global = document.getElementById("global");
      const flightRect = flight?.getBoundingClientRect();
      const globalRect = global?.getBoundingClientRect();
      const flightProgress = flightRect ? Math.min(1, Math.max(0, (h - flightRect.top) / (flightRect.height + h * 0.35))) : 0;
      const globalProgress = globalRect ? Math.min(1, Math.max(0, (h - globalRect.top) / (globalRect.height + h * 0.2))) : 0;

      root.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      root.style.setProperty("--flight-progress", flightProgress.toFixed(4));
      root.style.setProperty("--global-progress", globalProgress.toFixed(4));
      root.style.setProperty("--page-scroll", y.toFixed(1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="jesko-page">
      <header className="jesko-nav">
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#flight">Our Fleet</a>
          <a href="#benefits">Advantages</a>
          <a href="#global">Global</a>
        </nav>
        <div className="nav-contact">
          <a href="tel:+971544325050">+971 54 432 5050</a>
          <a href="mailto:info@jeskojets.com">info@jeskojets.com</a>
        </div>
        <button className="mobile-menu" aria-label="Open menu">☰</button>
      </header>

      <section className="hero" id="hero">
        <div className="hero-shade" />
        <div className="hero-copy hero-left" data-reveal>We are<br />movement</div>
        <div className="hero-copy hero-right" data-reveal>We are<br />distinction</div>
        <div className="hero-window">
          <img className="hero-back" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d27a91bc0bf516a17a3f69_img_hero-back.webp" alt="" />
          <img className="hero-sky" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf31df0eb6b62331d8e35a_9557f7de34f540aa715092b1bcdbbf57_img_sky-hero.webp" alt="View from a private jet window" />
          <img className="hero-front" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9dfe10f1c8a1d719c1e63_917d8b944f7f57b7fbe3969bf2719a2e_img_hero-front.webp" alt="" />
          <div className="hero-brand">Jesko Jets</div>
        </div>
        <div className="hero-bottom-left" data-reveal>
          <h1>Your<br />freedom to<br />enjoy life</h1>
          <p>Every flight is designed around your comfort, time, and ambitions — so you can focus on what truly matters, while we take care of everything else.</p>
        </div>
        <a className="book-pill" href="mailto:info@jeskojets.com">Book the Flight <span>↗</span></a>
        <a className="scroll-copy" href="#about">↓&nbsp;&nbsp; SCROLL DOWN <b>TO START THE JOURNEY</b></a>
      </section>

      <section className="about" id="about">
        <img className="about-clouds" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68ee74b1f45fbfb23fb6405a_clouds.webp" alt="" />
        <div className="about-inner">
          <p className="about-lead" data-reveal>Jesko Jets® is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.</p>
          <div className="about-mark">
            <span className="about-symbol">◎〰</span>
            <span>JESKO JETS<br />GLOBAL PRIVATE AVIATION</span>
          </div>
          <div className="about-grid" data-reveal>
            <article><h3>Direct Access to Private Travel</h3><p>Fly beyond boundaries with Jesko Jets. Our global operations ensure seamless, personalized travel experiences — from the first call to landing. Every journey is tailored to your comfort, privacy, and schedule.</p></article>
            <article><h3>Your Freedom to Enjoy Life</h3><p>We value your time above all. Jesko Jets gives you the freedom to live, work, and relax wherever life takes you — without compromise.</p></article>
            <article><h3>Precision and Excellence</h3><p>Each detail of your flight — from route planning to in-flight service — reflects our dedication to perfection.</p></article>
            <article><h3>Global Reach, Personal Touch</h3><p>With access to destinations in over 150 countries, Jesko Jets brings the world closer to you.</p></article>
          </div>
        </div>
      </section>

      <section className="flight" id="flight">
        <div className="flight-heading" data-reveal>
          <p>Fly the Legacy</p>
          <h2>Fly in<br /><span>Luxury</span></h2>
        </div>
        <div className="flight-copy" data-reveal>
          <div><strong>Luxury<br />that moves<br />with you</strong></div>
          <div className="flight-description"><div className="eyebrow-row"><span>GULFSTREAM</span><span>650ER</span></div><p>Featuring wings designed to minimize anything that could disrupt its natural aerodynamic balance, and powered by high-thrust Rolls-Royce BR725 AI-12 engines, the Gulfstream G650 is engineered for exceptional range and top-end speed.</p></div>
        </div>
        <div className="aircraft-stage">
          <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/69834ca922d650666343a7a4_img_jet.webp" alt="Jet Gulfstream 650ER" />
        </div>
        <div className="spec-layout" data-reveal>
          <div className="spec-title"><span>Gulfstream</span><strong>650ER</strong></div>
          <img className="blueprint" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9baf6224ae03a0c240aad_img_jet-blue-print.avif" alt="Blueprint layout of a Gulfstream 650ER" />
          <div className="range-copy"><h3>Ultra-long-range<br />Aircraft</h3><small>DIRECT ACCESS TO<br />PRIVATE TRAVEL</small><p>A true time-saving machine it brings Tokyo and New York an hour closer, and at 92% of the speed of sound, it can circle the globe with just a single stop.</p></div>
          <div className="spec-grid">
            {specs.map(([label, value]) => <div className="spec-item" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="benefits-inner" data-reveal>
          <p className="kicker">A BETTER WAY TO FLY</p>
          <div className="benefits-layout">
            <div className="benefit-list">
              {benefitItems.map((item, index) => (
                <details key={item.title} open={index === 0}>
                  <summary>{item.title}<span>{index === 0 ? "−" : "+"}</span></summary>
                  <p>{item.body}</p>
                </details>
              ))}
            </div>
            <img className="benefit-image" src="https://cdn.prod.website-files.com/68b5ebb0b83342b0b2bbd5ee/68d9a3daa04c725a21d89d3f_img_benefits-2.webp" alt="Pet traveling in a private jet cabin" />
          </div>
        </div>
      </section>

      <section className="data-strip" data-reveal>
        <div><span>COUNTRIES SUPPORTED</span><strong>174</strong></div>
        <div><span>BASED IN</span><strong>DUBAI, UAE</strong></div>
        <div><span>LOCAL TIME</span><strong>03:29</strong></div>
      </section>

      <section className="global" id="global">
        <div className="global-dark" data-reveal>
          <h2>Fly anywhere</h2>
          <div className="city-marquee">{cities.map((city) => <span key={city}>{city}</span>)}</div>
          <div className="global-word">Global</div>
        </div>
        <div className="globe-wrap" data-reveal>
          <img className="globe" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68b964263e6bec5732882c2d_569e84cc4860d163d99dd3d99d2396c9_Globe.webp" alt="Globe" />
          <div className="flight-card">
            <strong>5K+<br />flights</strong>
            <small>SUCCESSFULLY ARRANGED</small>
            <p>Each journey reflects years of expertise, precision, and trust. From last-minute charters to intercontinental business routes — Jesko Jets ensures safety, discretion, and excellence in every flight.</p>
          </div>
        </div>
        <footer className="site-footer" data-reveal>
          <h2>Fly anywhere with<br />total comfort and<br />control</h2>
          <div className="footer-meta">
            <div><span>FOR INQUIRIES</span><a href="mailto:info@jeskojets.com">info@jeskojets.com</a><a href="tel:+971544325050">+971 54 432 5050</a></div>
            <div className="footer-bottom"><span>©2026 JESKO JETS.<br />ALL RIGHTS RESERVED</span><a href="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68f25966263ae17c99ef6f66_Privacy%20Policy.pdf">PRIVACY POLICY</a><span>MADE BY</span><a href="https://thefirstthelast.agency/">THE FIRST THE LAST</a></div>
          </div>
        </footer>
      </section>
    </main>
  );
}
