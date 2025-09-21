"use client";

import { useState } from "react";
import Image from "next/image";

const COMPANY_EMAIL = "contact@yookthi.ai";

// Inline SVGs
const IconBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7.5 6A3.5 3.5 0 0 1 11 2.5V20M7.5 6A3.5 3.5 0 0 0 4 9.5c0 1.2.6 2.3 1.5 3M7.5 6v13M16.5 6A3.5 3.5 0 0 0 13 2.5M16.5 6A3.5 3.5 0 0 1 20 9.5c0 1.2-.6 2.3-1.5 3M16.5 6v13"/>
  </svg>
);
const IconRoute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 5h6a4 4 0 0 1 4 4v6a4 4 0 0 0 4 4h2"/>
    <circle cx="4" cy="5" r="2"/><circle cx="20" cy="19" r="2"/>
  </svg>
);
const IconCpu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
  </svg>
);
const IconBook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5V5a2 2 0 0 1 2-2h10.5"/><path d="M20 22V6a2 2 0 0 0-2-2H6"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
  </svg>
);

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from Yookthi Labs website");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Yookthi Labs home">
            <Image src="/logo-png-monogram.png" alt="Yookthi Labs" width={132} height={32} className="logo" priority />
          </a>
          <nav>
            <a href="#services">What We Do</a>
            <a href="#why">Why choose us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div> 
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <h1 className="heading">Data and AI advisory for businesses that need outcomes, not presentations</h1>
          <p>Yookthi Labs provides independent expertise to help organisations design AI strategy, develop practical roadmaps, and deliver fractional CTO leadership for startups.</p>
          <div className="stack">
            <a href="#contact" className="btn btn-primary">Start a conversation</a>
            <a href="#services" className="btn btn-outline">View what we do</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section white">
        <div className="container">
          <h2 className="heading">What We Do</h2>
          <div className="cards">
            <div className="card">
              <div className="top"><span className="icon-pill"><IconBrain /></span><h3 className="heading">Data & AI Strategy</h3></div>
              <p>Most AI initiatives fail because people get caught up in technology hype or treat AI as a magic wand, underestimating the organisational transformation and change management required. We help leadership teams develop clear AI strategies that account for both technical possibilities and implementation realities.</p>
              <ul className="list">
                <li>Current state assessment of data infrastructure and capabilities</li>
                <li>Identification of high-impact AI use cases with clear ROI</li>
                <li>Technology roadmap with realistic timelines and resource requirements</li>
                <li>Risk assessment and mitigation strategies for AI implementation</li>
              </ul>
            </div>
            <div className="card">
              <div className="top"><span className="icon-pill"><IconRoute /></span><h3 className="heading">AI Product Development</h3></div>
              <p>Whilst most consulting companies build AI as one-off services, effective AI requires product thinking. As AI capabilities become commoditised, the value lies in creating systems that learn continuously and deliver ongoing value rather than static models that degrade over time.</p>
              <ul className="list">
                <li>AI products designed for continuous learning and improvement</li>
                <li>Feedback loops that capture user behaviour and business outcomes</li>
                <li>Scalable infrastructure for model versioning and deployment</li>
                <li>Product roadmaps that evolve AI capabilities alongside business needs</li>
              </ul>
            </div>
            <div className="card">
              <div className="top"><span className="icon-pill"><IconCpu /></span><h3 className="heading">Fractional CTO Services</h3></div>
              <p>Proven experience building in startup environments from pre-seed through series-A.</p>
              <ul className="list">
                <li>Technical direction and architecture decisions</li>
                <li>Hiring strategy and team building</li>
                <li>Establishing ways of working and development processes</li>
                <li>Security implementation and cost control</li>
                <li>Delivery quality and product reliability</li>
              </ul>
            </div>
            <div className="card">
              <div className="top"><span className="icon-pill"><IconBook /></span><h3 className="heading">AI Skills Development</h3></div>
              <p>Whether you need one executive to understand AI implications or want to train entire teams, we design practical learning programmes that focus on real-world application rather than theoretical concepts.</p>
              <ul className="list">
                <li>Executive briefings on AI strategy and implementation</li>
                <li>Workshop for senior business stakeholders to drive value with AI</li>
                <li>Domain specific curriculum to increase impact for ongoing transformation programmes</li>
                <li>Individual coaching for business stakeholders driving AI initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="section why">
        <div className="container">
          <h2 className="heading">Why choose us</h2>
        <div className="why-list">
          {[
            "Seasoned advisors with decades of experience leading Data & AI transformation at scale",
            "Deep technical expertise with a strong product mindset rather than a services approach",
            "Rapid validation - working AI prototypes in 4 to 6 weeks to test feasibility, complexity and value",
            "Technology-agnostic architectures enabling easy portability across platforms and clouds",
            "Security-first approach with responsible, ethical and legally compliant AI by design",
            "Experience from pre-seed to Series-A in resource-constrained, fast-moving startup environments",
          ].map((x) => (
            <div key={x} className="why-item">
              <span className="check">✔</span>
              <span>{x}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact white">
        <div className="container">
          <h2 className="heading">Contact</h2>
          <p className="note">Enquiries are typically answered within 24 hours.</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows={5} value={message} onChange={(e)=>setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="submit">Send enquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Yookthi Labs</p>
          <p>Action-biased and results-focused AI</p>
        </div>
      </footer>
    </div>
  );
}
