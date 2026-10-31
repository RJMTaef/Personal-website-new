import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="eyebrow">03 / THE PERSON BEHIND THE WORK</p>
            <h2>
              Curious by nature.
              <br />
              <em>Practical by choice.</em>
            </h2>
            <div className="about-signature">
              Roslan Taef<span>BASED IN HALIFAX, CANADA</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I’m drawn to the space between a technical problem and the person
              who needs it solved.
            </p>
            <p>
              My work spans data engineering, analytics, and software
              development. I like understanding the whole path: where
              information comes from, how it is transformed, and what someone
              can actually do with it.
            </p>
            <p>
              My computer science background at Dalhousie University, with a
              focus that also includes management, shapes how I approach that
              work: understand the problem, build a clear solution, and keep
              improving it.
            </p>
            <a
              className="text-link"
              href={portfolioData.person.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="toolkit">
          <div className="toolkit-heading">
            <span className="eyebrow">MY WORKING TOOLKIT</span>
            <span>Chosen for the problem at hand.</span>
          </div>
          {portfolioData.toolkit.map((group) => (
            <div className="toolkit-row" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
        <aside className="side-note">
          <span className="side-note-symbol">✳</span>
          <div>
            <span className="eyebrow">BEYOND THE BUILD</span>
            <h3>Making technology easier to understand.</h3>
            <p>
              I also create practical AI tutorials through AI Tools
              Simplified—exploring how new tools fit into everyday workflows.
            </p>
          </div>
          <a
            className="text-link"
            href={portfolioData.person.social.youtube}
            target="_blank"
            rel="noreferrer"
          >
            Explore the channel
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
