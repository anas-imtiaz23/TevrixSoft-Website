import Link from "next/link";

const serviceLinks = [
  { label: "AI & Automation", href: "/#services", detail: "Practical systems that save time" },
  { label: "Web Development", href: "/#services", detail: "Fast, accessible digital experiences" },
  { label: "Product Design", href: "/#services", detail: "Thoughtful interfaces, built to last" },
];

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/#work" },
  { label: "About Us", href: "/#about-us" },
  { label: "Approach", href: "/#approach" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact Us", href: "/#contact" },
];

function Chevron() {
  return <span aria-hidden="true" className="nav-chevron" />;
}

function MenuLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <details className={`services-menu${mobile ? " services-menu-mobile" : ""}`}>
        <summary className="nav-link nav-summary">
          Services
          <Chevron />
        </summary>
        <div className="services-popover">
          {serviceLinks.map((item) => (
            <Link className="service-option" href={item.href} key={item.label}>
              <span className="service-icon" aria-hidden="true">
                {item.label === "AI & Automation" ? "A" : item.label === "Web Development" ? "W" : "P"}
              </span>
              <span>
                <span className="service-name">{item.label}</span>
                <span className="service-detail">{item.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </details>
      {primaryLinks.map((item) => (
        <Link className="nav-link" href={item.href} key={item.label}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-frame">
        <div className="header-bar">
          <Link className="brand-mark" href="/" aria-label="TevrixSoft home">
            <span className="brand-symbol" aria-hidden="true">T</span>
            <span className="brand-name">Tevrix<span>Soft</span></span>
          </Link>

          <nav className="desktop-navigation" aria-label="Main navigation">
            <MenuLinks />
          </nav>

          <div className="header-actions">
            <Link className="header-cta" href="/#contact">
              Book a Meeting
              <span aria-hidden="true">↗</span>
            </Link>
            <details className="mobile-menu">
              <summary className="mobile-menu-toggle" aria-label="Open navigation menu">
                <span />
                <span />
              </summary>
              <nav className="mobile-navigation" aria-label="Mobile navigation">
                <MenuLinks mobile />
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}