import {
  ArrowDownRight,
  ChartNoAxesCombined,
  Database,
  Workflow,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const icons = [Database, ChartNoAxesCombined, Workflow];
export function Skills() {
  return (
    <section id="specialties" className="section specialties-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHAT I BRING</p>
            <h2>
              The skills behind
              <br />
              the systems.
            </h2>
          </div>
          <p>
            I like working where data, software, and business questions meet.
            These are the areas I bring together.
          </p>
        </div>
        <div className="specialties-grid">
          {portfolioData.specialties.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="specialty" key={item.number}>
                <div className="specialty-top">
                  <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <div className="specialty-foot">
                  <span>{item.detail}</span>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
