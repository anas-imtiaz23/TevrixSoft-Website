import Image from "next/image";
import Link from "next/link";
import RoiCalculator from "@/app/components/roi-calculator";

const services = [
  {
    number: "01",
    title: "AI & intelligent systems",
    description: "Bring useful AI into the work you already do, from focused assistants to thoughtful product features.",
    symbol: "✳",
  },
  {
    number: "02",
    title: "Websites & digital products",
    description: "Create a clear, fast digital experience that feels unmistakably yours and works beautifully on every screen.",
    symbol: "↗",
  },
  {
    number: "03",
    title: "Automation & custom software",
    description: "Replace repetitive steps and disconnected tools with software shaped around the way your team works.",
    symbol: "⌘",
  },
  {
    number: "04",
    title: "Security & code review",
    description: "Get a clearer view of technical risk, with practical findings your team can act on.",
    symbol: "◇",
  },
];

const projects = [
  {
    type: "Digital product",
    title: "A clearer way to work",
    description: "A focused workspace for teams that need less busywork and better visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    alt: "Analytics dashboard on a laptop screen",
    className: "project-card project-card-wide",
  },
  {
    type: "Product experience",
    title: "Made for the moment",
    description: "A considered mobile experience that makes every next step feel simple.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=85",
    alt: "Colorful digital product design work on a desk",
    className: "project-card",
  },
  {
    type: "Web platform",
    title: "A better front door",
    description: "A polished web presence built to make a complex offer easy to understand.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Developer working on a web experience",
    className: "project-card",
  },
];

const process = [
  {
    number: "01",
    title: "Get clear on the goal",
    description: "We learn what is getting in the way, who the work is for, and what a good outcome looks like.",
  },
  {
    number: "02",
    title: "Shape the right solution",
    description: "We map the experience and technical approach before building, so every part has a reason to exist.",
  },
  {
    number: "03",
    title: "Build, refine, launch",
    description: "We work in the open, test with care, and help you move from a strong first release to what comes next.",
  },
];

const workflowSteps = [
  { app: "Inbox", title: "Read the request", detail: "New message received", state: "done" },
  { app: "AI", title: "Find the key details", detail: "Context summarized", state: "done" },
  { app: "Workspace", title: "Prepare the next step", detail: "Draft ready to review", state: "active" },
  { app: "Team", title: "Ask for approval", detail: "A person stays in control", state: "pending" },
];

const faqs = [
  {
    question: "What kind of projects does TevrixSoft take on?",
    answer: "We work on websites, digital products, AI features, workflow automation, and custom software. We start by understanding the problem and recommend the smallest useful solution.",
  },
  {
    question: "Can you improve a product we already have?",
    answer: "Yes. We can review an existing product, identify the highest-impact improvements, and work with your team to design, build, and ship them in manageable steps.",
  },
  {
    question: "How do you approach AI and automation?",
    answer: "We look for tasks where automation is dependable and genuinely useful. Sensitive or consequential actions can remain behind human review, and the system is designed around the tools and data you already use.",
  },
  {
    question: "How do we get started?",
    answer: "Send a short note about your goals and what is getting in the way. We will arrange a conversation, clarify the scope, and outline a practical next step.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-layout page-width">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Digital products, thoughtfully engineered</p>
            <h1>Better tools for<br /><em>better work.</em></h1>
            <p className="hero-intro">
              TevrixSoft builds custom software, useful AI, and automation for teams
              ready to make everyday work simpler and their next idea real.
            </p>
            <div className="hero-actions">
              <Link className="button button-lime" href="#contact">
                Start a project <ArrowIcon />
              </Link>
              <Link className="text-link text-link-light" href="#work">
                Explore our work <ArrowIcon />
              </Link>
            </div>
            <div className="hero-capabilities" aria-label="Our capabilities">
              <span>AI &amp; automation</span><i />
              <span>Digital products</span><i />
              <span>Custom software</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="workflow-panel">
              <div className="workflow-header">
                <div className="workflow-brand"><span className="workflow-orbit">T</span><span><b>Tevrix assistant</b><small>Workflow preview</small></span></div>
                <span className="workflow-status"><i /> Working</span>
              </div>
              <div className="workflow-trigger"><span>NEW REQUEST</span><b>Help a customer find the right next step</b></div>
              <ol className="workflow-list">
                {workflowSteps.map((step, index) => (
                  <li className={`workflow-step workflow-${step.state}`} key={step.title}>
                    <span className="workflow-step-mark" aria-hidden="true">{step.state === "done" ? "✓" : step.state === "active" ? "·" : index + 1}</span>
                    <span className="workflow-app">{step.app}</span>
                    <span className="workflow-step-copy"><b>{step.title}</b><small>{step.detail}</small></span>
                    {step.state === "active" && <span className="workflow-spinner" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <div className="workflow-footer"><span className="workflow-live" /> Your team stays in control <span className="workflow-footer-end">Made for your process</span></div>
            </div>
            <div className="floating-note">
              <span className="note-spark" aria-hidden="true">✳</span>
              <span><b>Human-led. AI-enabled.</b><small>Automation with a thoughtful handoff.</small></span>
            </div>
            <span className="visual-index" aria-hidden="true">BUILT WITH INTENTION</span>
          </div>
        </div>
        <Link className="scroll-cue" href="#services">
          <span className="scroll-line" />
          Scroll to explore
        </Link>
      </section>

      <section className="capability-strip" aria-label="TevrixSoft capabilities">
        <div className="page-width capability-strip-inner">
          <span>One team, end to end</span>
          <div><i /> Strategy</div><div><i /> Product design</div><div><i /> Engineering</div><div><i /> AI & automation</div>
        </div>
      </section>

      <section className="shift-section section-pad" id="why-tevrix">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A better way forward</p>
              <h2>Less friction.<br />More room to grow.</h2>
            </div>
            <p className="section-lede">
              The right digital tools should fit your team, not add another layer
              of busywork. We help make complicated processes feel clear.
            </p>
          </div>
          <div className="shift-grid">
            <article className="shift-item"><span>01 / SIMPLIFY</span><h3>Bring your tools together</h3><p>Connect the systems you rely on and make everyday work easier to follow.</p></article>
            <article className="shift-item"><span>02 / ADAPT</span><h3>Build around your process</h3><p>Give your team software that reflects how the work really gets done.</p></article>
            <article className="shift-item"><span>03 / OWN</span><h3>Keep a clear path forward</h3><p>Make deliberate choices about your product, data, and what you build next.</p></article>
          </div>
        </div>
      </section>

      <section className="calculator-section section-pad" id="calculator">
        <div className="page-width">
          <div className="calculator-heading">
            <p className="eyebrow">Make the numbers clearer</p>
            <h2>What could disconnected tools be costing you?</h2>
            <p>Use a quick estimate to see the recurring cost of the tools and manual steps your team relies on.</p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="page-width">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Technology that<br />moves work forward.</h2>
            </div>
            <p className="section-lede">
              From a single sharp idea to a complete digital product, we bring
              strategy, design, and engineering together under one roof.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <div className="service-topline">
                  <span className="service-number">{service.number}</span>
                  <span className="service-symbol" aria-hidden="true">{service.symbol}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="service-link" href="#contact" aria-label={`Discuss ${service.title}`}>
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-width">
          <div className="work-heading">
            <div>
              <p className="eyebrow">Selected capabilities</p>
              <h2>Digital work with<br />a human point of view.</h2>
            </div>
            <p className="section-lede">
              Every project starts with people and a real problem. Here are a few
              directions our work can take.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.title}>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 700px) 92vw, (max-width: 1050px) 46vw, 40vw"
                    className="project-photo"
                  />
                  <span className="project-open" aria-hidden="true"><ArrowIcon /></span>
                </div>
                <div className="project-copy">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about-us">
        <div className="page-width about-layout">
          <div className="about-marker" aria-hidden="true">
            <span>TS</span>
            <span className="marker-orbit" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little about us</p>
            <h2>Small enough to care.<br /><em>Experienced enough to deliver.</em></h2>
            <p>
              We bring product thinking and practical engineering to the same
              table. That means clear decisions, direct collaboration, and
              technology that earns its place in your business.
            </p>
            <Link className="text-link" href="#process">How we work <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="process-section section-pad" id="process">
        <div className="page-width">
          <div className="process-heading">
            <p className="eyebrow">A good process makes good work</p>
            <h2>Clear steps. No mystery.</h2>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-item" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section section-pad" id="approach">
        <div className="page-width principles-layout">
          <div>
            <p className="eyebrow eyebrow-light">How we think</p>
            <h2>Useful first.<br /><em>Impressive for a reason.</em></h2>
          </div>
          <div className="principles-list">
            <article><span>01</span><div><h3>Start with the real problem</h3><p>We learn your context before suggesting technology or scope.</p></div></article>
            <article><span>02</span><div><h3>Keep people in the loop</h3><p>Automation should support good decisions, not hide how they happen.</p></div></article>
            <article><span>03</span><div><h3>Build for what comes next</h3><p>Clear foundations make it easier to adapt as your needs change.</p></div></article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="page-width faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Good questions</p>
            <h2>Before we<br />get started.</h2>
            <p>Not sure where to begin? Tell us what you are trying to solve and we can work out the next step together.</p>
            <Link className="text-link" href="#contact">Talk with our team <ArrowIcon /></Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary><span>{faq.question}</span><b aria-hidden="true">+</b></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-pattern" aria-hidden="true" />
        <div className="page-width contact-layout">
          <div>
            <p className="eyebrow eyebrow-light">Have a good one in mind?</p>
            <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          </div>
          <div className="contact-aside">
            <p>Tell us what you are trying to change. We’ll help you find a smart way to get there.</p>
            <a className="button button-lime" href="mailto:hello@tevrixsoft.com">
              hello@tevrixsoft.com <ArrowIcon />
            </a>
            <span className="contact-note">A real conversation, no pressure.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <Link className="footer-brand" href="#home">TevrixSoft<span>®</span></Link>
          <p>Digital products, designed for what&apos;s next.</p>
          <Link href="#home" className="back-top">Back to top ↑</Link>
        </div>
      </footer>
    </main>
  );
}