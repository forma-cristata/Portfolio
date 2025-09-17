# Portfolio Application

This folder contains supplementary information about the project's architecture and technical design.

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: Provides a detailed technical overview of the system architecture, including the client/server separation, SSR flow, project structure, and deployment considerations.
- **[COPILOT_INSTRUCTIONS.md](./COPILOT_INSTRUCTIONS.md)**: Contains instructions for GitHub Copilot's DOCS workflow for automated documentation updates.

# Portfolio - Angular Universal Application

A high-performance, server-side rendered portfolio application built with Angular Universal, featuring a clean architectural separation between client and server code for enhanced maintainability and scalability.

## Technology Stack

| Category      | Technologies                            |
|---------------|-----------------------------------------|
| **Frontend**  | Angular 19, TypeScript, SCSS, RxJS      |
| **Backend**   | Node.js, Express.js, Angular Universal  |
| **Development** | Angular CLI, Webpack, ESLint, Prettier  |
| **Testing**   | Jasmine, Karma                          |

## Architecture Overview

The application follows a client/server separation pattern, providing clear separation of concerns between frontend and backend logic, type-safe shared interfaces for consistent data contracts, and an optimized build process for both client and server bundles.

## Project Structure

```
src/
├── client/          # Client-side Angular application
│   ├── main.ts         # Client bootstrap
│   ├── index.html      # HTML template
│   └── app/            # Angular components
├── server/          # Server-side rendering
│   ├── main.server.ts  # SSR bootstrap
│   └── server.ts       # Express server
└── shared/          # Shared utilities
    └── types.ts        # Common types
```

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd portfolio
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200/`.

## Available Scripts

| Script                  | Description                               |
|-------------------------|-------------------------------------------|
| `npm start`             | Start client-side development server.     |
| `npm run build`         | Build the application for production.     |
| `npm test`              | Run unit tests with Karma and Jasmine.    |
| `npm run serve:ssr`     | Serve the production build with SSR.      |
