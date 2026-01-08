# Aahara Restaurant Website

## Overview

Aahara is a static marketing website for a pure vegetarian multi-cuisine restaurant. The site is built as a single-page application showcasing the restaurant's brand, menu categories, gallery, testimonials, and contact information. It's a frontend-only React application with no backend services or database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server (runs on port 5000)
- Single-page application with React Router for navigation (currently only index and 404 routes)

### UI Component Library
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS** for styling with custom theme configuration
- Custom color palette using CSS variables (leaf green and champagne gold theme)
- **Playfair Display** (serif) for headings and **Lato** (sans-serif) for body text

### State Management
- **TanStack Query** (React Query) available for data fetching (not currently utilized)
- React's built-in useState for local component state (contact form)

### Project Structure
```
src/
├── components/          # Feature components (sections of the page)
│   └── ui/             # shadcn/ui component library
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route components (Index, NotFound)
└── assets/             # Static assets (referenced via alias)
```

### Path Aliases
- `@/` maps to `./src/`
- `@assets/` maps to `./attached_assets/`

### Design Patterns
- Component-based architecture with section components for each page area
- CSS-in-JS via Tailwind utility classes
- CSS variables for theming defined in `src/index.css`
- Responsive design with mobile-first approach

## External Dependencies

### UI Libraries
- **Radix UI** - Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider functionality
- **class-variance-authority** - Component variant management
- **clsx/tailwind-merge** - Conditional class name utilities

### Form Handling
- **React Hook Form** with `@hookform/resolvers` for form validation
- **react-day-picker** with **date-fns** for date selection

### Notifications
- **Sonner** - Toast notifications
- Custom toast hook with Radix Toast primitives

### Theming
- **next-themes** - Theme management (dark mode support configured)

### Third-Party Services
- Google Fonts (Playfair Display, Lato) loaded via CSS import
- No backend API integrations
- No database connections
- No authentication system