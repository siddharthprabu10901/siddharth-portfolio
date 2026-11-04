export const profile = {
  name: "Siddharth P",
  title: "Senior Software Engineer",
  company: "Odessa Technologies",
  location: "Coimbatore, Tamil Nadu",
  email: "siddharthprabu10901@gmail.com",
  linkedin: "https://www.linkedin.com/in/siddharth-p-07a967217",
  github: "https://github.com/siddharthprabu10901",
  projectDemo:
    import.meta.env.VITE_FLOWDESK_URL ||
    "https://siddharth-flowdesk.sidlunatic10.chatgpt.site",
  projectSource: import.meta.env.VITE_FLOWDESK_SOURCE_URL || "",
};
export const caseStudies = {
  flowdesk: {
    number: "01",
    type: "Independent learning project",
    title: "Flowdesk",
    subtitle: "An expense workflow, with every state considered.",
    summary:
      "A browser-based React and TypeScript application exploring the interactions behind an enterprise expense workspace. Built with AI assistance as a hands-on learning project, with original code and fictional sample data.",
    sections: [
      {
        title: "The problem",
        text: "Expense tools need more than a list of amounts. People need to find records quickly, correct mistakes, understand review status and know what happens next. Flowdesk brings those interactions into one small, focused application.",
      },
      {
        title: "The implementation",
        text: "Component-based React UI with TypeScript models, a custom persistence hook, derived filtering and summary state, native modal dialogs, and a reusable validation layer. Pending expenses can be edited, approved or rejected with a reason; approved items can be marked reimbursed in the demo.",
      },
      {
        title: "Quality and edge cases",
        text: "The project includes unit tests for filtering, validation, workflow rules and CSV export, plus Playwright scenarios for the main UI workflow. It handles empty results, malformed saved data, storage failures, invalid amounts, invalid dates and keyboard interaction.",
      },
      {
        title: "Scope and learning",
        text: "An independent frontend demo using localStorage, not a production expense service. There is no authentication, backend, shared database, receipt upload or real payment processing. My React experience is being developed through this project; it is separate from my professional JavaScript and jQuery experience.",
      },
    ],
    tags: ["React", "TypeScript", "Vite", "Playwright", "CSS"],
  },
  grids: {
    number: "02",
    type: "Professional work · text-only case study",
    title: "More useful enterprise grids",
    subtitle: "Helping people work with data on their own terms.",
    summary:
      "Frontend contributions to enterprise applications at Odessa, focused on making data-heavy screens easier to navigate and configure. This is a high-level account of my work, without company source code, screenshots or customer data.",
    sections: [
      {
        title: "The user need",
        text: "Different workflows call for different views of the same data. Enterprise users need relevant actions, useful filters and control over the columns they see.",
      },
      {
        title: "My contribution",
        text: "Built and enhanced Grid User Preferences, including saved views, filtering and column management. Contributed Relevant Grid Actions and reusable framework components using JavaScript, jQuery, HTML5, CSS3 and Syncfusion.",
      },
      {
        title: "Working with the team",
        text: "Collaborated with product owners, QA engineers, architects and business analysts to understand requirements, refine behaviour and validate changes within existing enterprise workflows.",
      },
      {
        title: "What this demonstrates",
        text: "Experience implementing UI requirements in an established codebase, handling data-heavy interactions, building reusable components, resolving defects and working through release validation. Specific customer details and proprietary implementation are intentionally excluded.",
      },
    ],
    tags: ["JavaScript", "jQuery", "Syncfusion", "HTML5", "CSS3"],
  },
  workflows: {
    number: "03",
    type: "Professional work · text-only case study",
    title: "Clearer paths through complex workflows",
    subtitle: "Navigation and release confidence for enterprise UI.",
    summary:
      "Professional frontend work on automotive retail, lease origination and loan origination applications at Odessa. This case study describes my contributions at a general level; no internal product materials are published.",
    sections: [
      {
        title: "The context",
        text: "Enterprise workflows span multiple screens and steps. Users need to understand where they are, what they can do next and how to return to relevant information.",
      },
      {
        title: "My contribution",
        text: "Implemented and enhanced breadcrumb navigation, wizard navigation, overview panels, copy/paste interactions and workflow visualisation features within shared frontend components.",
      },
      {
        title: "Release confidence",
        text: "Automated release sanity testing with Playwright and generated execution reports to support validation. Combined automation with targeted manual defect testing, production issue resolution and frontend security remediation.",
      },
      {
        title: "What this demonstrates",
        text: "Practical experience translating business requirements into UI behaviour, maintaining consistency across shared components, debugging production issues and supporting releases alongside QA and product teams.",
      },
    ],
    tags: ["Enterprise UI", "JavaScript", "jQuery", "Playwright", "Debugging"],
  },
};
export type CaseId = keyof typeof caseStudies;
