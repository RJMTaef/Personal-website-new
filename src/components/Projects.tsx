"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Terminal,
} from "lucide-react";
import { portfolioData, type PortfolioProject } from "@/data/portfolio";

const filters = ["All work", "Data systems", "Web & automation"];

function ProjectVisual({ type }: { type: string }) {
  if (type === "banking")
    return (
      <div className="project-visual banking-visual" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-toolbar">
            <span className="window-dots">● ● ●</span>
            <span>BANKING / ANALYTICS WORKBENCH</span>
            <span>↗</span>
          </div>
          <div className="mock-content">
            <div className="mock-sidebar">
              <span className="mock-logo">
                baw<span>.</span>
              </span>
              <span className="mock-nav active">◫ Overview</span>
              <span className="mock-nav">↔ Transactions</span>
              <span className="mock-nav">⌁ Risk analysis</span>
              <span className="mock-nav">▤ Forecasting</span>
              <span className="synthetic-label">SYNTHETIC DATA</span>
            </div>
            <div className="mock-dashboard">
              <div className="mock-title">
                A clearer view of banking.<span>EXPLORE THE SYSTEM</span>
              </div>
              <div className="mock-metrics">
                <div>
                  Transactions
                  <strong>
                    Understand
                    <br />
                    activity.
                  </strong>
                </div>
                <div>
                  Risk signals
                  <strong>
                    Spot the
                    <br />
                    unusual.
                  </strong>
                </div>
                <div>
                  Cash demand
                  <strong>
                    Explore
                    <br />
                    what’s next.
                  </strong>
                </div>
              </div>
              <div className="mock-chart">
                <span>ANALYSIS WORKFLOW</span>
                <svg viewBox="0 0 400 90" preserveAspectRatio="none">
                  <path
                    d="M0 75L35 65L65 72L100 44L125 55L160 28L195 38L230 20L270 35L305 12L340 20L375 6L400 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 88H400M0 58H400M0 28H400"
                    stroke="currentColor"
                    strokeOpacity=".1"
                    fill="none"
                  />
                </svg>
                <div className="chart-foot">
                  <span>INGEST</span>
                  <span>MODEL</span>
                  <span>EXPLORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="visual-caption">
          INTERFACE CONCEPT / PROJECT CAPABILITIES
        </span>
      </div>
    );
  if (type === "analytics")
    return (
      <div className="project-visual analytics-visual" aria-hidden="true">
        <div className="analytics-sheet">
          <div className="analytics-head">
            <span className="cdti-mark">
              cdti<span> / </span>
            </span>
            <span>ANALYTICS & TOOLS</span>
            <span className="tiny-status">● LIVE APP</span>
          </div>
          <h4>
            From traffic.
            <br />
            To understanding.
          </h4>
          <div className="analytics-bars">
            {[36, 52, 43, 68, 58, 80, 65, 92, 77, 100, 87, 113].map(
              (height, i) => (
                <i key={i} style={{ height }} />
              ),
            )}
          </div>
          <div className="analytics-tools">
            <span>
              GA4 reports <ArrowUpRight size={12} />
            </span>
            <span>
              Campaign links <ArrowUpRight size={12} />
            </span>
            <span>
              Content tools <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
        <span className="visual-caption">
          INTERFACE CONCEPT / REPORTING & EVERYDAY TOOLS
        </span>
      </div>
    );
  if (type === "pipeline")
    return (
      <div className="project-visual pipeline-visual" aria-hidden="true">
        <div className="pipeline-title">
          <Terminal size={16} /> TRANSACTION INSIGHTS / WORKFLOW
        </div>
        <div className="pipeline-steps">
          {[
            { icon: Database, name: "Generate", ext: "raw records" },
            { icon: Layers3, name: "Clean", ext: "Python + Pandas" },
            { icon: GitBranch, name: "Query", ext: "SQL + SQLite" },
          ].map((step, index) => (
            <div className="pipeline-step" key={step.name}>
              <step.icon size={24} strokeWidth={1.3} />
              <strong>{step.name}</strong>
              <small>{step.ext}</small>
              {index < 2 && <ArrowRight className="pipeline-arrow" size={18} />}
            </div>
          ))}
        </div>
        <div className="pipeline-bottom">
          <Check size={13} /> A clear path from source records to analysis.
        </div>
      </div>
    );
  return (
    <div className="project-visual code-visual" aria-hidden="true">
      <div className="editor-tab">
        <Code2 size={15} /> Code quality, inside your editor.
      </div>
      <div className="editor-body">
        <div className="code-line">
          <span>01</span>
          <code>
            <b>class</b> RefactoringWorkflow {"{"}
          </code>
        </div>
        <div className="code-line">
          <span>02</span>
          <code>
            {" "}
            detect<span className="code-accent">(</span>javaCode
            <span className="code-accent">)</span>;
          </code>
        </div>
        <div className="code-line">
          <span>03</span>
          <code>
            {" "}
            review<span className="code-accent">(</span>codeSmells
            <span className="code-accent">)</span>;
          </code>
        </div>
        <div className="code-line">
          <span>04</span>
          <code>
            {" "}
            suggest<span className="code-accent">(</span>refactoring
            <span className="code-accent">)</span>;
          </code>
        </div>
        <div className="code-line">
          <span>05</span>
          <code>{"}"}</code>
        </div>
        <div className="editor-note">
          <span>✦</span> AI-assisted suggestions. Developer-led decisions.
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} />
      <div className="project-body">
        <div className="project-kicker">
          <span>{project.kind}</span>
          <span>/{project.number}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="project-actions">
          <details>
            <summary>
              Inside the project <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="project-details">
              <h4>The question</h4>
              <p>{project.problem}</p>
              <h4>The implementation</h4>
              <p>{project.implementation}</p>
              <h4>The result</h4>
              <p>{project.takeaway}</p>
            </div>
          </details>
          <a
            href={project.live || project.github}
            target="_blank"
            rel="noreferrer"
          >
            {project.live ? "Visit live site" : "View source"}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">
              {" "}
              for {project.name} (opens a new tab)
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All work");
  const projects = portfolioData.projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              Ideas, made
              <br />
              <em>tangible.</em>
            </h2>
          </div>
          <p>
            A few things I’ve built and contributed to. Each project is a
            different way of connecting data, tools, and people.
          </p>
        </div>
        <div className="work-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "All work" && <span>04</span>}
              </button>
            ))}
          </div>
          <span className="work-count" aria-live="polite">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <a
          className="all-projects"
          href={portfolioData.person.social.github}
          target="_blank"
          rel="noreferrer"
        >
          More experiments, builds, and source code on GitHub
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
