import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import config from "./schoolConfig";
import { updatePageMetadata } from "./seo.js";
import "./styles.css";

const assetUrl = (path) =>
  path.startsWith("/images/")
    ? `${import.meta.env.BASE_URL}${path.slice(1)}`
    : path;

const Button = ({ to = "/contact.html", children = "Discover admissions" }) => (
  <Link className="button" to={to}>
    {children}
  </Link>
);
const Heading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);
const Photo = ({ src, alt, className = "", eager = false }) => (
  <img
    className={className}
    src={assetUrl(src)}
    alt={alt}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={eager ? "high" : "auto"}
  />
);

function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        headerRef.current?.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <>
      <div className="topbar" aria-hidden="true" />
      <header ref={headerRef}>
        <div className="header-inner">
          <Link
            className="brand"
            to="/"
            aria-label={`${config.identity.name} home`}
          >
            <img src={assetUrl(config.identity.logo)} alt="" />
            <span>
              {config.identity.shortName}
              <small>{config.identity.brandSubtitle}</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav
            id="navigation"
            className={open ? "open" : ""}
            aria-label="Main navigation"
          >
            {config.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

function AdmissionBanner() {
  return (
    <section className="admission-banner container">
      <img
        className="admission-watermark"
        src={assetUrl(config.identity.logo)}
        alt=""
        aria-hidden="true"
      />
      <div>
        <p className="eyebrow">{config.admission.eyebrow}</p>
        <h2>{config.admission.title}</h2>
        <p>{config.admission.description}</p>
      </div>
      <div className="admission-actions">
        <Button>Begin your journey</Button>
        <a
          className="admission-call"
          href={`tel:${config.contact.phones[0].replace(/\s/g, "")}`}
        >
          Call {config.contact.phones[0]}
        </a>
      </div>
    </section>
  );
}

function LearningJourney() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);
  const stages = config.academics.stages;
  const stage = stages[active];
  const content = config.presentation.learning;
  function handleKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + stages.length) % stages.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = stages.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabsRef.current?.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  return (
    <section className="learning-section section">
      <div className="container">
        <div className="heading-row">
          <Heading eyebrow={content.eyebrow} title={content.title} />
          <p className="heading-description">{content.description}</p>
        </div>
        <div
          className="learning-tabs"
          role="tablist"
          aria-label="Learning stages"
          ref={tabsRef}
        >
          {stages.map((item, index) => (
            <button
              key={item.title}
              id={`stage-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="stage-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleKey(event, index)}
            >
              <span>0{index + 1}</span>
              {item.title}
            </button>
          ))}
        </div>
        <div
          className="learning-panel"
          id="stage-panel"
          role="tabpanel"
          aria-labelledby={`stage-tab-${active}`}
          tabIndex={0}
        >
          <Photo
            src={content.images[active % content.images.length]}
            alt={`${stage.title} learning, illustrative image`}
          />
          <div className="learning-copy">
            <p className="eyebrow">{stage.classes}</p>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <Button to="/academics.html">{content.linkLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SchoolLife() {
  const content = config.presentation.schoolLife;
  return (
    <section className="container section school-life">
      <div className="heading-row">
        <Heading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <Link className="text-link" to="/gallery.html">
          {content.linkLabel}
        </Link>
      </div>
      <div className="moments-grid">
        {content.moments.map((moment) => (
          <Link className="moment" key={moment.title} to="/gallery.html">
            <Photo src={moment.image} alt={moment.title} />
            <div>
              <p className="eyebrow">{moment.label}</p>
              <h3>{moment.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ParentQuestions() {
  const content = config.presentation.faq;
  return (
    <section className="container section faq-layout">
      <Heading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      <div className="faq-list">
        {content.items.map((item, index) => (
          <details key={item.question} name="parent-questions">
            <summary>
              <span className="faq-number">0{index + 1}</span>
              <span>{item.question}</span>
              <span className="faq-indicator" aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FacilityCards({ limit }) {
  return (
    <div className="facility-grid">
      {config.facilities.slice(0, limit).map((item) => (
        <article className="facility-card" key={item.title}>
          <div className="image-wrap">
            <Photo src={item.image} alt={item.title} />
            <span>{item.category}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <Photo eager src={config.home.heroImage} alt={config.home.heroAlt} />
        <div className="hero-shade" />
        <div className="hero-content container">
          <p className="eyebrow">{config.home.eyebrow}</p>
          <h1>
            {config.home.title.split("\n").map((line, index) => (
              <span key={index}>{line} </span>
            ))}
          </h1>
          <p>{config.home.subtitle}</p>
          <div className="button-row">
            <Button>Explore admissions</Button>
            <Link className="text-link light" to="/about.html">
              Get to know us
            </Link>
          </div>
        </div>
        <div className="hero-index">
          01 <span>/ {config.identity.tagline}</span>
        </div>
      </section>
      <section className="stats container" aria-label="School highlights">
        {config.home.highlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>
      <section className="welcome container section">
        <div className="welcome-photo">
          <Photo
            src={config.home.welcomeImage}
            alt="School campus and learning community"
          />
          <div className="since">
            Our community<strong>{config.identity.location}</strong>
            <span>Learning with Indian values</span>
          </div>
        </div>
        <div>
          <Heading
            eyebrow={config.home.sections.welcomeEyebrow}
            title={config.home.welcomeTitle}
            description={config.identity.introduction}
          />
          <Link className="text-link" to="/about.html">
            Discover our story
          </Link>
          <div className="mini-affiliation">{config.identity.affiliation}</div>
        </div>
      </section>
      <section className="values section">
        <div className="container">
          <Heading
            eyebrow={config.home.sections.valuesEyebrow}
            title={config.home.sections.valuesTitle}
          />
          <div className="three-columns">
            {config.home.pillars.map((item, i) => (
              <article className="pillar" key={item.title}>
                <span className="number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LearningJourney />
      <section className="container section">
        <div className="heading-row">
          <Heading
            eyebrow={config.home.sections.facilitiesEyebrow}
            title={config.home.sections.facilitiesTitle}
          />
          <Link className="text-link" to="/gallery.html">
            Explore our campus
          </Link>
        </div>
        <FacilityCards limit={3} />
      </section>
      <section className="values section">
        <div className="container welcome">
          <div>
            <Heading
              eyebrow={config.home.culture.eyebrow}
              title={config.home.culture.title}
              description={config.home.culture.description}
            />
            <Link className="text-link" to="/gallery.html">
              {config.home.culture.linkLabel}
            </Link>
          </div>
          <Photo
            className="rounded-photo"
            src={config.home.culture.image}
            alt={config.home.culture.imageAlt}
          />
        </div>
      </section>
      <SchoolLife />
      <section className="news-section section">
        <div className="container news-layout">
          <Heading
            eyebrow={config.home.sections.newsEyebrow}
            title={config.home.sections.newsTitle}
            description={config.home.sections.newsDescription}
          />
          <div>
            {config.announcements.map((item) => (
              <Link className="news-item" key={item.title} to={item.path}>
                <span className="eyebrow">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container section achievements">
        <Heading
          eyebrow={config.home.sections.activitiesEyebrow}
          title={config.home.sections.activitiesTitle}
        />
        <div className="two-columns">
          {config.achievements.map((item) => (
            <article className="outline-card" key={item.title}>
              <span className="gold-symbol" aria-hidden="true">
                ✧
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <AdmissionBanner />
    </>
  );
}

function PageHero({ eyebrow, title, description }) {
  const { pathname } = useLocation();
  const visual = config.presentation.pageImages[pathname];
  return (
    <section className="page-hero">
      <div className="container page-hero-layout">
        <div className="page-hero-copy">
          <Link className="breadcrumb" to="/">
            Home
          </Link>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {visual && (
          <figure className="page-hero-visual">
            <Photo eager src={visual.image} alt={visual.caption} />
            <figcaption>{visual.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <PageHero {...config.about} description={config.identity.description} />
      <section className="container section welcome">
        <Photo
          className="rounded-photo"
          src={config.home.welcomeImage}
          alt="Campus community"
        />
        <div>
          <Heading
            eyebrow={config.home.sections.welcomeEyebrow}
            title={config.home.welcomeTitle}
            description={config.about.history}
          />
          <div className="two-columns">
            <div>
              <h3>Our vision</h3>
              <p>{config.about.vision}</p>
            </div>
            <div>
              <h3>Our mission</h3>
              <p>{config.about.mission}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="values section">
        <div className="container">
          <Heading
            eyebrow="People with purpose"
            title="A shared commitment to every child."
          />
          <div className="two-columns">
            {[config.about.founder, config.about.principal].map((person) => (
              <article className="leadership" key={person.name}>
                <div className="leadership-profile">
                  <Photo
                    src={person.photo}
                    alt={`${person.name}, illustrative profile photo`}
                  />
                  <div>
                    <p className="eyebrow">{person.role}</p>
                    <h3>{person.name}</h3>
                  </div>
                </div>
                <div className="leadership-message">
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>
                    <p>{person.message}</p>
                  </blockquote>
                  <div className="leadership-signature" aria-hidden="true">
                    {person.name}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <Heading eyebrow="At a glance" title="School information" />
        <dl className="school-info">
          {[
            ["School", config.identity.name],
            ["Established", config.identity.established],
            ["Affiliation", config.identity.affiliation],
            ["School code", config.identity.schoolCode],
            ["UDISE code", config.identity.udiseCode],
            ["Address", config.contact.address],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <AdmissionBanner />
    </>
  );
}

function Academics() {
  return (
    <>
      <PageHero
        {...config.academics}
        description={config.academics.introduction}
      />
      <section className="container section">
        <Heading
          eyebrow="Every stage, thoughtfully designed"
          title="A journey that grows with your child."
        />
        <div className="two-columns">
          {config.academics.stages.map((stage, i) => (
            <article className="stage-card" key={stage.title}>
              <span className="number">0{i + 1}</span>
              <p className="eyebrow">{stage.classes}</p>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="values section">
        <div className="container">
          <Heading
            eyebrow="Our approach"
            title="Understanding today. Applying tomorrow."
          />
          <div className="three-columns">
            {config.academics.methodology.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <Heading
          eyebrow="Subjects & life skills"
          title={config.academics.subjectsTitle}
        />
        <div className="subject-grid">
          {config.academics.subjects.map((subject) => (
            <article className="subject-card" key={subject.title}>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container section">
        <Heading
          eyebrow="An environment for learning"
          title="The right spaces for big ideas."
          description={config.academics.environment}
        />
        <FacilityCards limit={4} />
      </section>
      <AdmissionBanner />
    </>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const items = [...config.facilities, ...config.gallery.images];
  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement;
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        event.preventDefault();
        document.getElementById("close-image")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.getElementById("close-image")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [selected]);
  return (
    <>
      <PageHero {...config.gallery} description={config.gallery.introduction} />
      <section className="container section">
        <div className="filters" aria-label="Filter gallery">
          {["All", ...new Set(items.map((item) => item.category))].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ),
          )}
        </div>
        <div className="gallery-grid">
          {items
            .filter((item) => filter === "All" || item.category === filter)
            .map((item) => (
              <article key={item.title}>
                <button
                  className="gallery-photo"
                  onClick={() => setSelected(item)}
                  aria-label={`Enlarge ${item.title}`}
                >
                  <Photo src={item.image} alt={item.title} />
                </button>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </article>
            ))}
        </div>
      </section>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            id="close-image"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ✕
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <Photo eager src={selected.image} alt={selected.title} />
            <figcaption>{selected.title}</figcaption>
          </figure>
        </div>
      )}
      <AdmissionBanner />
    </>
  );
}

function WhatsAppContact() {
  return (
    <div className="whatsapp-card">
      <p className="eyebrow">Let’s connect</p>
      <h3>Talk to us on WhatsApp</h3>
      <p>Have a question about admissions or our school? Send us a message.</p>
      <a
        className="whatsapp-button"
        href={`https://wa.me/${config.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

function Contact() {
  return (
    <>
      <PageHero
        eyebrow={config.admission.eyebrow}
        title={config.admission.title}
        description={config.admission.description}
      />
      <section className="container section contact-layout">
        <Heading eyebrow="Come say hello" title="We’d love to meet you." />
        <address>
          <h3>Visit our campus</h3>
          <p>{config.contact.address}</p>
          <a
            className="text-link"
            href={config.contact.mapsLink}
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
          <h3>Call us</h3>
          {config.contact.phones.map((phone) => (
            <a
              className="contact-line"
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
            >
              {phone}
            </a>
          ))}
          <h3>Email us</h3>
          <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
          <h3>Office hours</h3>
          <p>{config.contact.hours}</p>
          <WhatsAppContact />
        </address>
      </section>
      <section className="values section">
        <div className="container">
          <Heading
            eyebrow="The admission journey"
            title="A few simple steps to a new beginning."
          />
          <div className="three-columns admission-steps">
            {config.admission.steps.map((step, i) => (
              <article key={step.title}>
                <span className="number">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="documents">
            <h3>Documents to keep handy</h3>
            <ul>
              {config.admission.documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{config.admission.note}</p>
          </div>
        </div>
      </section>
      <ParentQuestions />
      <section className="container section">
        <Heading eyebrow="Find your way" title="Your visit starts here." />
        <iframe
          className="map"
          src={config.contact.mapsEmbed}
          title="School location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="small-text">{config.contact.mapCaption}</p>
      </section>
    </>
  );
}

function PartnerBranding() {
  const branding = config.footer.partnerBranding;
  return (
    <div className="partner-branding">
      <div className="partner-wordmark">
        <span className="partner-label">{branding.label}</span>
        <strong>
          <span>{branding.primaryName}</span>{" "}
          <span>{branding.secondaryName}</span>
        </strong>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <img src={assetUrl(config.identity.logo)} alt="" />
            <span>
              {config.identity.shortName}
              <small>{config.identity.brandSubtitle}</small>
            </span>
          </Link>
          <p>{config.footer.description}</p>
          <p className="footer-tagline">{config.identity.tagline}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {config.navigation.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>{config.contact.address}</p>
          <a href={`tel:${config.contact.phones[0].replace(/\s/g, "")}`}>
            {config.contact.phones[0]}
          </a>
          <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
          {config.contact.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {config.footer.copyright}
        </span>
        <PartnerBranding />
      </div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    updatePageMetadata(pathname);
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = assetUrl(config.identity.favicon);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main");
          main?.focus();
          main?.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/academics.html" element={<Academics />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="container section">
                <h1>Page not found</h1>
                <Button to="/">Return home</Button>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

if (typeof document !== "undefined") {
  const root = document.getElementById("root");
  const base = new URL(import.meta.env.BASE_URL, document.baseURI).pathname;
  const legacyRoute = window.location.hash.slice(1);
  const legacyMatch = config.navigation.find(
    (item) => item.path === (legacyRoute === "/" ? "/" : `${legacyRoute}.html`),
  );
  if (legacyMatch) {
    window.history.replaceState(
      null,
      "",
      `${base}${legacyMatch.path.slice(1)}`,
    );
  } else if (window.location.pathname === `${base}index.html`) {
    window.history.replaceState(
      null,
      "",
      `${base}${window.location.search}${window.location.hash}`,
    );
  }
  const app = (
    <React.StrictMode>
      <BrowserRouter basename={base}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  createRoot(root).render(app);
}
