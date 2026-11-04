# Learn React through this portfolio

This is an AI-assisted reference project using React and TypeScript. You can study it in plain JavaScript terms first. Your production experience remains separate from React learning.

## The files

- `src/main.tsx`: starts React and renders the main App component.
- `src/profile.ts`: ordinary data objects for your details and project stories.
- `src/App.tsx`: function components and JSX; state for the mobile menu, selected story and copy-message feedback.
- `src/styles.css`: the design, spacing, responsive layout and focus styles.
- `public/resume.html`: an independent printable HTML document.

## Concepts in order

1. Build a static name/about section with a function that returns JSX.
2. Create a ProjectCard function component that receives title and description as props.
3. Put three project objects in an array, then render cards with `map` and stable keys.
4. Add `useState` to open/close one project story.
5. Add a simple mobile menu using a boolean state value.
6. Study how `CaseStudy` uses `useRef` and `useEffect` to open a native dialog, restore focus and clean up when closed.
7. Study TypeScript annotations, timers and clipboard error handling afterwards.

The app uses React, TypeScript, Vite, CSS and Lucide icons. Node.js/npm run the local tools. There is no backend or login system.

Try rebuilding the first five steps in a separate JavaScript practice folder without copying the completed file. Spend most of each session implementing and debugging. Keep the published reference available for comparison.

For both projects together, a reasonable starting estimate is 45–70 hours of reading plus implementation practice, with another 5–10 hours for basic TypeScript if new. Your pace will vary. At around one hour on five or six days weekly, plan roughly 9–16 weeks to study, modify and rebuild smaller versions.

Useful primary references: [React Quick Start](https://react.dev/learn) and [Thinking in React](https://react.dev/learn/thinking-in-react).
