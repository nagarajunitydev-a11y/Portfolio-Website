# Portfolio Website Documentation

This document is the primary entry point for the Qvrix portfolio website project. The application is a modern Next.js 15 single-page experience for showcasing studio services, projects, technology expertise, and contact capabilities.

## Project Overview

The project is implemented as a React/Next.js front-end with a lightweight API layer backed by MongoDB. It is designed to present a polished brand experience for a creative technology studio and to collect inbound contact and newsletter submissions.

### What is implemented today
- A full-screen animated landing experience with scroll-based navigation
- Multiple portfolio sections: Hero, About, Services, Technology, Portfolio, Process, CTA, Contact, Footer
- Dynamic project filtering and media fallbacks
- A contact form that submits to a Next.js API route
- A MongoDB-backed API for contact and newsletter persistence
- A rich visual system using Tailwind CSS, Framer Motion, and Three.js

## Features

- Animated hero section with particle background
- Smooth scrolling and reading progress
- Responsive navigation with mobile menu
- Filterable project portfolio cards
- Service cards with call-to-action links
- Contact form with client-side validation and server submission
- Newsletter submission endpoint
- Optimized image handling and performance-oriented rendering

## Architecture

The system follows a layered app-router architecture:

```mermaid
flowchart LR
  A[Browser] --> B[Next.js App Router]
  B --> C[Portfolio Page Components]
  B --> D[/api/contact and /api/newsletter]
  D --> E[MongoDB]
  C --> F[Shared Content Data]
  C --> G[UI Primitives and Styling]
```

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS, CSS variables, custom utility classes |
| Animation | Framer Motion, GSAP, Lenis |
| 3D | Three.js, React Three Fiber |
| Data | MongoDB, UUID |
| State | React hooks, TanStack Query (provider configured) |
| Icons | lucide-react, react-icons |

## Folder Structure

```text
app/                 # App Router pages, global layout, API routes
components/          # Page sections and reusable UI primitives
hooks/               # Custom hooks
lib/                 # Shared constants, utilities, portfolio content
public/              # Static assets and project media
tests/               # Placeholder Python test package
```

## Installation

```bash
yarn install
```

## Environment Setup

The application expects the following environment variable:

| Variable | Required | Purpose |
| --- | --- | --- |
| MONGO_URL | Yes for persistence | MongoDB connection string for API routes |
| DB_NAME | No | MongoDB database name; defaults to portfolio |
| CORS_ORIGINS | No | Controls CORS response header |

> Needs Manual Review: A production-ready .env.example file is not present yet.

## Running Locally

```bash
yarn dev
```

Then visit http://localhost:3000.

## Build and Deployment

```bash
yarn build
yarn start
```

Deployment is currently configured for standalone output in Next.js. The project is compatible with Vercel-style deployments but production environment variables and hosting details should be reviewed manually.

## Usage Guide

1. Open the home page.
2. Browse sections with the sticky navigation.
3. Review portfolio cards and filter by category.
4. Submit the contact form to persist a message via the API.
5. Use the configurator link in the Services section when available.

## Screenshots Placeholder

- Hero section: Needs Manual Review
- Portfolio grid: Needs Manual Review
- Contact form: Needs Manual Review

## Troubleshooting

- If the contact form returns errors, verify MONGO_URL is configured.
- If images fail to render, ensure files exist under public/Images or the remote asset URL is reachable.
- If the development server fails, confirm Node dependencies were installed correctly.

## License

No explicit license file is present in the repository. This is marked as Needs Manual Review.

## Related Documentation

- [Architecture](ARCHITECTURE.md)
- [API](API.md)
- [Database](DATABASE.md)
- [Features](FEATURES.md)
- [Setup](SETUP.md)
