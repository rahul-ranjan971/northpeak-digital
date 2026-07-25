# NorthPeak Digital Agency Website

This is a responsive one-page website for a fictional digital agency, "NorthPeak Digital", built as a qualification task for Digital Heroes.

Live Demo: [ADD AFTER DEPLOYMENT]
GitHub: [ADD AFTER PUSHING]

## Project Overview

The project is a polished, production-quality, responsive one-page agency website that demonstrates strong frontend development fundamentals. It is built according to a specific set of requirements, focusing on visual design, semantic structure, accessibility, performance, and code quality.

## Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop.
- **Hero Section**: Strong headline and clear call-to-action.
- **Services Section**: A grid of 6 core services offered by the agency.
- **Results/Testimonials**: Fictional, yet believable client results.
- **Pricing Tiers**: Three distinct pricing plans.
- **Contact Form**: A fully functional contact form with client-side validation and success state.
- **Accessible**: Built with accessibility in mind (keyboard navigation, ARIA attributes, semantic HTML).
- **High Performance**: Optimized for fast loading times, aiming for a high Lighthouse score.

## Technology Stack

- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **Tailwind CSS**: For styling the application.
- **JavaScript**: The primary programming language.
- **Lucide React**: For icons.

## Local Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd northpeak-digital
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Available npm Commands

-   `npm run dev`: Starts the development server.
-   `npm run build`: Creates a production build of the application.
-   `npm run preview`: Serves the production build locally.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Results.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Responsive Approach

The site is designed to be fully responsive, with specific attention to three main breakpoints: 360px (mobile), 768px (tablet), and 1440px (desktop). Tailwind CSS's responsive prefixes (`sm:`, `md:`, `lg:`) are used extensively. The mobile navigation is handled with a slide-out menu.

## Accessibility Considerations

-   Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`, etc.) are used.
-   A logical heading hierarchy is maintained.
-   Form elements have associated labels.
-   Keyboard navigation is supported with visible focus states.
-   Sufficient color contrast is used.
-   ARIA attributes are used where necessary to improve accessibility.
-   Images have `alt` text where appropriate.

## Performance Considerations

-   Built with Vite for optimized builds.
-   Minimal JavaScript, with no heavy libraries.
-   Use of Tailwind CSS helps to keep the final CSS bundle size small.
-   No heavy images or videos are used. CSS is preferred for visual effects.
-   Google Fonts are loaded efficiently.
