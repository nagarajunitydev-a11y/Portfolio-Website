# Architecture

## High-Level Architecture

The application is a single-page marketing site built with Next.js App Router. Client-rendered sections handle the visual experience, while the API layer provides form submission persistence.

```mermaid
flowchart TD
  subgraph Client
    A[app/page.js]
    B[components/portfolio/*]
    C[lib/portfolio/data.js]
  end
  subgraph Server
    D[app/api/[[...path]]/route.js]
    E[MongoDB]
  end
  A --> B
  B --> C
  B --> D
  D --> E
```

## Module Interactions

### App shell
- [app/layout.js](../app/layout.js) defines metadata, fonts, and global providers.
- [app/page.js](../app/page.js) assembles the full portfolio experience.
- [app/providers.js](../app/providers.js) wires React Query into the tree.

### Content layer
- [lib/portfolio/data.js](../lib/portfolio/data.js) acts as the central content repository.
- It defines studio metadata, navigation links, services, process steps, skills, testimonials, and project data.

### Section components
- [components/portfolio/Navbar.js](../components/portfolio/Navbar.js) manages active-section highlighting and mobile menu state.
- [components/portfolio/Hero.js](../components/portfolio/Hero.js) renders the landing experience and animated statically repeated tech stack marquee.
- [components/portfolio/Portfolio.js](../components/portfolio/Portfolio.js) handles project filtering and card rendering.
- [components/portfolio/Contact.js](../components/portfolio/Contact.js) handles form UI and API submission.

### Visual experience layer
- [components/portfolio/ParticleField.js](../components/portfolio/ParticleField.js) renders a Three.js particle scene.
- [components/portfolio/SmoothScroll.js](../components/portfolio/SmoothScroll.js) initializes Lenis-based smooth scrolling.
- [components/portfolio/ScrollProgress.js](../components/portfolio/ScrollProgress.js) uses Framer Motion scroll progress.

## Data Flow

1. The main page imports the content model from the data module.
2. Each section component consumes that shared data to render its UI.
3. The contact form posts JSON to the API route.
4. The API performs validation and inserts a record into MongoDB.
5. The response returns success or validation error state to the UI.

## Design Patterns

- Centralized content data module for content-driven sections
- Component composition for page sections
- Client-side animations with motion libraries
- Dynamic imports for heavy visual modules
- Defensive UI rendering with local fallbacks for broken images

## Dependency Graph

| Component / File | Depends on |
| --- | --- |
| app/page.js | Navbar, Hero, About, Services, Portfolio, Contact, Footer, LoadingScreen, SmoothScroll, ScrollProgress |
| Contact.js | SectionHeader, PROFILE data, fetch API |
| Portfolio.js | PROJECTS and PROJECT_CATEGORIES data |
| Hero.js | STUDIO, STATS, TECH_STACK data, ParticleField |
| Services.js | SERVICE_CATEGORIES and CONFIGURATOR_URL |
| Footer.js | STUDIO, NAV_LINKS data |
| api/route.js | MongoClient, uuid |

## Important Components and Services

### Core Components
- Navbar: scroll-aware navigation and mobile drawer
- Hero: hero section with animated intro and marquee
- Portfolio: filterable showcase cards
- Contact: form submission experience
- Footer: site navigation and social links

### Supporting Services
- API route handler: /api/contact and /api/newsletter
- MongoDB connection caching via module-level singleton
- Image fallback handling inside portfolio images

## Notes and Gaps

- React Query is configured but is not currently used by any visible feature in the source tree.
- The project does not define a formal state management architecture beyond component-local state.
- Authentication and role-based access control are not implemented.

## Related Documentation

- [README](README.md)
- [API](API.md)
- [Database](DATABASE.md)
