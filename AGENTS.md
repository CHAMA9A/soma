## Project Summary
Soma Lubrifiants Showcase is a premium professional website for an automotive lubrication company. It highlights their product ranges, technical expertise, successful partnerships, and company history. The site is designed with a modern, high-performance aesthetic using React, Tailwind CSS, and Framer Motion.

## Tech Stack
- Frontend: React (Vite)
- Styling: Tailwind CSS
- UI Components: Shadcn UI (Radix UI)
- Animations: Framer Motion
- Icons: Lucide React
- Routing: React Router DOM
- Forms: React Hook Form + Zod
- Build Tool: Vite
- Package Manager: npm (or Bun)

## Architecture
- `src/components/layout`: Core layout components like Navbar, Footer, and Layout wrapper.
- `src/components/home`: Specific sections for the landing page (Hero, KeyFigures, ProductCategories, etc.).
- `src/components/ui`: Reusable UI components (buttons, inputs, cards) powered by Shadcn UI.
- `src/pages`: Main page components representing different routes (Index, Products, About, etc.).
- `src/hooks`: Custom React hooks for shared logic.
- `src/lib`: Utility functions and library configurations.

## User Preferences
- Clean, professional automotive aesthetic.
- Use of high-quality imagery to represent premium products.
- Responsive design for all screen sizes.
- Modern interactions and animations using Framer Motion.

## Project Guidelines
- Follow standard React and Tailwind CSS conventions.
- Keep components small and focused.
- Use TypeScript for type safety.
- Prefer server-side components where possible (though this is a Vite SPA).
- No comments unless requested.

## Common Patterns
- Page layouts wrapped in a common `Layout` component.
- Sequential section reveals using Framer Motion's `whileInView`.
- Data-driven rendering for repetitive sections like product cards or features.
