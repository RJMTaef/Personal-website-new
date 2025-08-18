export const portfolioData = {
  "person": {
    "name": "Roslan Taef",
    "tagline": "Data • DevOps • Analytics",
    "location": "Halifax, Nova Scotia, Canada",
    "one_liner": "4th-year Computer Science student at Dalhousie building data pipelines, dashboards, and clean automation.",
    "about_long": "I'm a 4th-year Computer Science student at Dalhousie University (minor in Management) focused on data engineering, analytics, and DevOps. I enjoy turning messy data into reliable pipelines and actionable dashboards, and I like production-minded code with tests, CI/CD, and observability. I run the social brand \"AI Tools Simplified\" to help people use AI practically.",
    "email": "rjmtaef@gmail.com",
    "phone": "+1 (782) 774-8920",
    "website": "https://github.com/RJMTaef",
    "social": {
      "github": "https://github.com/RJMTaef",
      "linkedin": "https://www.linkedin.com/in/roslantaef",
      "youtube": "https://www.youtube.com/@AIToolsSimplified-s1k",
      "tiktok": "https://www.tiktok.com/@aitoolssimplified",
      "instagram": "https://www.instagram.com/ai_toolssimplofied/",
      "x": "https://x.com/roslantaef"
    },
    "availability": "Open to Winter 2025 and Summer 2026 co-op / internships in Data Engineering, Analytics, or DevOps.",
    "headshot_url": "/assets/roslan.jpg"
  },
  "skills": {
    "languages": ["Python", "Java", "C", "JavaScript/TypeScript", "SQL", "Bash"],
    "data": ["Pandas", "NumPy", "scikit-learn", "TensorFlow/PyTorch (basic)", "DBT (preferred)", "Airflow (preferred)", "Power BI", "Matplotlib"],
    "devops": ["Linux", "GitHub Actions/Jenkins", "Docker", "Kubernetes", "Terraform", "AWS (EC2, S3, IAM)"],
    "backend": ["REST APIs", "Node.js/Express", "Firebase", "SQLite/PostgreSQL (preferred)"],
    "frontend": ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Charting libs"],
    "mobile": ["Android (Java)"],
    "extras": ["NLP basics", "Prompt engineering", "Content strategy", "A/B testing basics"]
  },
  "experience": [
    {
      "title": "Data Science & Analytics Intern",
      "company": "TechCorp Analytics",
      "location": "Halifax, NS",
      "start": "2025-05",
      "end": "2025-08",
      "highlights": [
        "Built ETL pipelines to ingest CSV/JSON data into a relational store; automated with scheduled jobs.",
        "Produced KPI dashboards (Power BI) with drilldowns and role-based views.",
        "Improved data quality with validation checks and alerting; reduced pipeline failures by ~30%.",
        "Documented data models and pipeline runbooks; onboarded team members."
      ]
    },
    {
      "title": "Co-Founder",
      "company": "Bracketsmiths",
      "location": "Halifax, NS",
      "start": "2024-01",
      "end": "Present",
      "highlights": [
        "Delivered small business web apps and automations using MERN + CI/CD.",
        "Led client discovery, scoping, and iterative delivery with Git-based workflows."
      ]
    }
  ],
  "education": [
    {
      "school": "Dalhousie University",
      "program": "Bachelor of Computer Science (with Management minor)",
      "location": "Halifax, NS",
      "start": "2022-09",
      "end": "2026-09",
      "highlights": [
        "GPA: strong; A in CSCI 2170.",
        "Courses: Algorithms, Information Retrieval, Network Computing, Databases, Software Engineering.",
        "Activities: research-oriented projects; interested in working with professors."
      ]
    }
  ],
  "projects": [
    {
      "name": "Banking Analytics Workbench (BAW)",
      "tags": ["Python", "Streamlit", "DuckDB", "scikit-learn", "Plotly", "Data Engineering", "ML"],
      "links": {"github": "https://github.com/RJMTaef/Banking_Analytics_Workbench"},
      "summary": "Full-stack analytics platform simulating banking data marts with end-to-end ETL, predictive models, and interactive dashboards.",
      "bullets": [
        "Developed a full-stack analytics platform simulating banking data marts (customers, transactions, fraud) with end-to-end ETL in Python/DuckDB.",
        "Implemented predictive models (logistic regression, isolation forest) for churn and fraud detection; produced explainable metrics and risk scores.",
        "Shipped interactive dashboards with KPI cards, cohort/time-series views, and scenario testing to support business decision-making."
      ]
    },
    {
      "name": "DalDash: Institutional KPI Tracker",
      "tags": ["Data Engineering", "Dashboards", "Automation"],
      "links": {"github": "https://github.com/RJMTaef/daldash"},
      "summary": "Simulated data pipeline for educational KPIs—extract, clean, store, and visualize.",
      "bullets": [
        "Ingested CSV/JSON to a warehouse schema; scheduled transforms with DBT/Airflow (preferred).",
        "Modeled star schemas for enrollment/retention and built DAX/Power BI measures.",
        "Automated data validation with tests and alerting; shipped versioned dashboards."
      ]
    },
    {
      "name": "End-to-End CI/CD Pipeline",
      "tags": ["AWS", "Jenkins", "Docker", "Kubernetes", "Terraform"],
      "links": {"github": "https://github.com/RJMTaef/End-to-End-pipeline"},
      "summary": "Infrastructure-as-code CI/CD delivering containerized apps to a K8s cluster.",
      "bullets": [
        "Provisioned infra with Terraform; built & pushed images; deployed via manifests/Helm.",
        "Automated build/test/deploy gates with Jenkins pipelines and Git hooks."
      ]
    },
    {
      "name": "DalTutor Android App",
      "tags": ["Android", "Java", "Firebase", "SQLite", "PayPal"],
      "links": {"github": "https://github.com/RJMTaef/daltutor"},
      "summary": "Marketplace for tutoring sessions with role-based flows and in-app payments.",
      "bullets": [
        "Designed role-based UI/logic for employers/employees; added offer acceptance and completion flow.",
        "Integrated legacy PayPal SDK; added local caching and offline-first reads."
      ]
    },
    {
      "name": "Genesis E-commerce (MERN)",
      "tags": ["React", "Node", "Express", "MongoDB", "Stripe"],
      "links": {"github": "https://github.com/RJMTaef/genesis-ecommerce"},
      "summary": "Full-stack store with auth, cart, checkout, and admin analytics."
    },
    {
      "name": "DevOps CI/CD (AWS + K8s)",
      "tags": ["DevOps", "IaC", "Observability"],
      "links": {"github": "https://github.com/RJMTaef/devops-pipeline"},
      "summary": "Jenkins + GitHub Actions hybrid pipelines with Dockerized microservices and Helm releases."
    },
    {
      "name": "Code Smell Detector (VS Code Plugin)",
      "tags": ["TypeScript", "Python", "NLP"],
      "links": {"github": "https://github.com/RJMTaef/code-smell-detector"},
      "summary": "Assists developers by flagging code smells and suggests refactors."
    }
  ],
  "content": [
    {
      "title": "AI Tools Simplified",
      "type": "Brand",
      "platforms": ["YouTube", "TikTok", "Instagram", "Facebook"],
      "highlights": [
        "Short, practical tutorials on using AI tools for real workflows.",
        "Scripts, editing, and analytics tracking to iterate on content performance."
      ]
    }
  ],
  "testimonials": [
    {
      "name": "Mentor / Professor",
      "quote": "Roslan ships reliable, well-documented pipelines and thinks like an engineer."
    }
  ],
  "awards": [
    "A in CSCI 2170 (second version of CSCI 1170)."
  ],
  "interests": ["Linux sysadmin", "Data engineering", "NLP customization", "Automation", "Content creation"],
  "resume_pdf": "/assets/Roslan-Taef-Resume.pdf",
  "contact": {
    "message": "Let's build data products and pipelines that actually ship.",
    "cta_primary": "Email me",
    "cta_secondary": "Download Résumé"
  },
  "seo": {
    "title": "Roslan Taef — Data • DevOps • Analytics",
    "description": "Portfolio of Roslan Taef — data pipelines, dashboards, and DevOps automation. Dalhousie CS student in Halifax.",
    "keywords": ["Roslan Taef", "Data Engineering", "Analytics", "DevOps", "Halifax", "Dalhousie"]
  }
};

export type PortfolioData = typeof portfolioData;
