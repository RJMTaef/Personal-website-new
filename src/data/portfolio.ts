export const portfolioData = {
  person: {
    name: "Roslan Taef",
    email: "rjmtaef@gmail.com",
    location: "Halifax, Nova Scotia",
    tagline: "Data engineering · Analytics · Automation",
    social: {
      github: "https://github.com/RJMTaef",
      linkedin: "https://www.linkedin.com/in/roslantaef",
      youtube: "https://www.youtube.com/@AIToolsSimplified-s1k",
    },
  },
  specialties: [
    {
      number: "01",
      title: "Data engineering",
      description:
        "Give messy data a dependable path. I build ingestion and cleaning workflows, structure relational data, and make it easier to query and use.",
      tools: ["Python", "SQL", "Pandas", "DuckDB", "SQLite", "dbt"],
      detail: "From raw sources to useful data models.",
    },
    {
      number: "02",
      title: "Analytics & dashboards",
      description:
        "Turn data into something people can work with. I connect reporting APIs and build dashboards that make trends, traffic sources, and business questions easier to explore.",
      tools: ["GA4", "Streamlit", "Plotly", "React", "TypeScript"],
      detail: "From a business question to a clear interface.",
    },
    {
      number: "03",
      title: "Automation & AI tools",
      description:
        "Make recurring work easier to run. I connect APIs, build practical web tools, and use AI-assisted workflows to move from an idea to a working implementation.",
      tools: [
        "REST APIs",
        "Next.js",
        "Cloudflare",
        "GitHub",
        "AI integrations",
      ],
      detail: "From a repeated task to a reusable workflow.",
    },
  ],
  projects: [
    {
      id: "banking-workbench",
      number: "01",
      name: "Banking Analytics Workbench",
      category: "Data systems",
      kind: "Independent project · Synthetic data",
      description:
        "A local analytics workspace that brings banking data, predictive models, and interactive reporting into one connected system.",
      tools: ["Python", "DuckDB", "dbt", "Airflow", "Streamlit"],
      visual: "banking",
      github: "https://github.com/RJMTaef/Banking_Analytics_Workbench",
      live: "",
      problem:
        "Banking analysis spans customer activity, transaction risk, and cash demand. Exploring each in isolation makes it harder to see how they connect.",
      implementation:
        "The project uses synthetic banking records, DuckDB and dbt data models, Python models for fraud, churn and forecasting, and a Streamlit interface for exploration.",
      takeaway:
        "A reproducible local environment for exploring a complete analytics workflow, from source records to decision tools.",
    },
    {
      id: "cdti-analytics",
      number: "02",
      name: "CDTI Analytics & Tools",
      category: "Web & automation",
      kind: "Deployed web application",
      description:
        "A shareable analytics dashboard and practical tools for understanding website traffic, creating campaign links, and formatting content.",
      tools: ["JavaScript", "GA4 Data API", "Cloudflare Workers"],
      visual: "analytics",
      github: "",
      live: "https://cdti-analytics.cdti-analytics.workers.dev",
      problem:
        "Website reporting and everyday content tasks need a clear interface that people can use without navigating multiple technical tools.",
      implementation:
        "The application connects GA4 reports and realtime data to a custom dashboard, alongside a UTM generator and a browser-based LinkedIn post formatter.",
      takeaway:
        "A live example of connecting reporting APIs, useful interfaces, and a Cloudflare deployment workflow.",
    },
    {
      id: "transaction-pipeline",
      number: "03",
      name: "Transaction Insights Pipeline",
      category: "Data systems",
      kind: "Independent project · Synthetic data",
      description:
        "A focused banking data pipeline: generate records, clean them with Python, load a relational database, and investigate patterns with SQL.",
      tools: ["Python", "Pandas", "SQL", "SQLite"],
      visual: "pipeline",
      github:
        "https://github.com/RJMTaef/banking-transaction-insights-pipeline",
      live: "",
      problem:
        "Useful analysis depends on consistent inputs and a data model that is easy to understand.",
      implementation:
        "Separate scripts generate and clean customer, account and transaction records before loading SQLite. SQL files define the schema and analytical queries.",
      takeaway:
        "A straightforward, inspectable pipeline that keeps data preparation separate from the questions asked of the data.",
    },
    {
      id: "code-smell",
      number: "04",
      name: "Code Smell Detection",
      category: "Web & automation",
      kind: "Collaborative software project",
      description:
        "A VS Code extension that connects Java code-smell detection with AI-assisted refactoring suggestions inside the editor.",
      tools: ["TypeScript", "VS Code API", "DesigniteJava", "ChatGPT"],
      visual: "code",
      github: "https://github.com/RJMTaef/code-smell-detection",
      live: "",
      problem:
        "Moving between code analysis tools and an editor adds friction when investigating code quality issues.",
      implementation:
        "The extension integrates DesigniteJava detection and ChatGPT-assisted refactoring in a TypeScript-based VS Code workflow.",
      takeaway:
        "A practical integration of developer tooling and AI assistance, developed in a collaborative Git workflow.",
    },
  ],
  toolkit: [
    {
      label: "Data & modeling",
      items: "Python / SQL / Pandas / DuckDB / SQLite / dbt",
    },
    {
      label: "Interfaces & reporting",
      items: "React / Next.js / TypeScript / Streamlit / Plotly / GA4",
    },
    {
      label: "Integration & delivery",
      items:
        "REST APIs / Cloudflare Workers / Git / GitHub / AI-assisted development",
    },
  ],
  seo: {
    title: "Roslan Taef — Data, Analytics & Automation",
    description:
      "Roslan Taef builds data pipelines, analytics dashboards, and practical automation tools. Explore selected projects in data engineering, API integration, and AI-assisted software.",
  },
};

export type PortfolioProject = (typeof portfolioData.projects)[number];
