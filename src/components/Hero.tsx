import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  Workflow,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-topline">
        <span>
          <span className="status-dot" />
          {portfolioData.person.location}, Canada
        </span>
        <span>Independent thinking. Practical building.</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">DATA · SOFTWARE · REAL-WORLD PROBLEMS</p>
          <h1>
            I turn complexity
            <br />
            into something
            <br />
            <em>useful.</em>
          </h1>
          <p className="hero-description">
            I’m Roslan. I build data pipelines, clear analytics, and automation
            tools that help people make sense of information—and do more with
            it.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="system-visual"
          aria-label="My approach: connect data sources, build the right system, and deliver useful insights and tools"
          role="img"
        >
          <div className="visual-heading">
            <span className="mini-square" /> A SYSTEMS MINDSET
            <span className="visual-index">FIG. 01</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-source source-top">
            <Database size={19} />
            <span>
              DATA SOURCES<small>Find the signal.</small>
            </span>
          </div>
          <div className="system-core">
            <span className="core-cross cross-top">+</span>
            <span className="core-cross cross-bottom">+</span>
            <Workflow size={32} strokeWidth={1.3} />
            <strong>
              Connect.
              <br />
              Build. Refine.
            </strong>
            <span>THE WAY I WORK</span>
          </div>
          <div className="visual-source source-bottom">
            <Braces size={19} />
            <span>
              USEFUL SYSTEMS<small>Make it work for people.</small>
            </span>
          </div>
          <span className="diagram-label label-left">RAW → REFINED</span>
          <span className="diagram-label label-right">
            IDEA → IMPLEMENTATION
          </span>
          <div className="visual-foot">
            <span>
              <i /> Built with intention
            </span>
            <span>Always in progress ↗</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>THINK IN SYSTEMS. BUILD FOR PEOPLE.</span>
        <span>
          Data engineering <i /> Analytics <i /> Automation
        </span>
        <a href="#specialties" aria-label="Explore specialties">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
