# Project Architecture & Technical Overview

This document provides a technical overview of the portfolio application, covering its architecture, key technical features, and setup instructions.

## System Architecture

The application uses a modern Angular Universal architecture with a clear separation between client and server concerns. This design promotes maintainability, scalability, and performance.

### Core Principles

- **Separation of Concerns**: Clear boundaries between client (`src/client`), server (`src/server`), and shared code (`src/shared`).
- **Type Safety**: Comprehensive TypeScript usage across all layers for robust data contracts.
- **Performance-First**: Optimized for both Server-Side Rendering (SSR) and client-side performance.

### Architecture Diagram

```
┌──────────────────────────────────┐
│         Browser (Client)         │
├──────────────────────────────────┤
│     Angular Application          │
│  (src/client)                    │
└──────────────────────────────────┘
              │ HTTP Request
              ▼
┌──────────────────────────────────┐
│      Node.js Server (SSR)        │
├──────────────────────────────────┤
│ Express.js + Angular Universal   │
│  (src/server)                    │
└──────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────┐
│          Shared Layer            │
├──────────────────────────────────┤
│   Types & Interfaces             │
│  (src/shared)                    │
└──────────────────────────────────┘
```

### Server-Side Rendering (SSR) Flow

1.  The browser makes an initial request to the Node.js server.
2.  The Express server, using the Angular Universal engine, renders the requested route into static HTML.
3.  The server sends the fully rendered HTML to the browser, allowing for a fast First Contentful Paint (FCP).
4.  The client-side Angular application bootstraps in the background (a process called "hydration"), taking over from the static HTML to provide a full Single-Page Application (SPA) experience without a page reload.

## Project Structure

The workspace is organized to maintain a clean separation between the client-side and server-side code.

```
src/
├── client/          # Client-side Angular application
│   ├── main.ts         # Client bootstrap
│   ├── index.html      # HTML template
│   └── app/            # Angular components
├── server/          # Server-side rendering logic
│   ├── main.server.ts  # SSR bootstrap
│   └── server.ts       # Express server
└── shared/          # Shared code (types, interfaces)
    └── types.ts        # Common type definitions
```

## Setup and Scripts

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Development Dependencies & Tooling

The project includes a comprehensive set of development tools for code quality, formatting, and developer experience:

### Core Development Dependencies
- **Angular CLI** (`@angular/cli`): Command-line interface for Angular development
- **Angular Compiler CLI** (`@angular/compiler-cli`): Ahead-of-time (AOT) compilation support
- **TypeScript** (`typescript`): Primary programming language with type safety

### Code Quality & Linting
- **ESLint** (`eslint`): JavaScript and TypeScript linting
  - `@angular-eslint/eslint-plugin`: Angular-specific ESLint rules
  - `@angular-eslint/template-parser`: Template parsing for Angular components
  - `@typescript-eslint/eslint-plugin`: TypeScript-specific ESLint rules
  - `@typescript-eslint/parser`: TypeScript parser for ESLint
- **Prettier**: Code formatting (configured via `.prettierrc.yaml`)

### Testing Framework
- **Jasmine** (`jasmine-core`): Testing framework for unit tests
- **Karma** (`karma`): Test runner with browser automation
  - `karma-chrome-launcher`: Chrome browser integration
  - `karma-coverage`: Code coverage reporting
  - `karma-jasmine`: Jasmine framework adapter
  - `karma-jasmine-html-reporter`: HTML test result reporting

### Type Definitions
- `@types/express`: TypeScript definitions for Express.js
- `@types/jasmine`: TypeScript definitions for Jasmine
- `@types/node`: TypeScript definitions for Node.js

### Development Configuration

The project includes comprehensive development tooling and configuration:

#### Code Quality & Formatting
- **ESLint**: Angular-specific linting rules with TypeScript support (`.eslintrc`)
  - Angular-specific rules via `@angular-eslint/eslint-plugin`
  - TypeScript ESLint integration via `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`
  - Automatic fixes and error detection on save
  - Working directory configuration for monorepo support
- **Prettier**: Consistent code formatting with YAML configuration (`.prettierrc.yaml`)
  - 120 character line width for readability
  - 4-space tab width for consistent indentation
  - Single quotes and trailing commas for cleaner diffs
  - Automated formatting on save

#### IDE Configuration
- **VS Code Settings**: Optimized workspace configuration (`.vscode/settings.json`)
  - ESLint integration with automatic fixes on save
  - Format on save for TypeScript files
  - Import organization and trailing whitespace cleanup
  - Consistent editor behavior across team members
  - Auto-detection of formatters and linters

#### Code Organization Standards
- **Import Ordering**: Automated import organization with consistent grouping:
  - Angular core imports first (`@angular/platform-browser`)
  - Application-specific imports follow (`./app/app.component`, `./app/app.config`)
  - Alphabetical ordering within groups for predictability
- **Code Formatting**: Consistent spacing, indentation, and line endings across all files
- **Type Safety**: Comprehensive TypeScript configuration with strict type checking
- **File Structure**: Clear separation of concerns with dedicated client/server/shared directories

### Running the Application

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm start
    ```
    The application is served at `http://localhost:4200`.

### Key Scripts

| Script              | Description                               |
|---------------------|-------------------------------------------|
| `npm start`         | Start the client-side development server. |
| `npm run build`     | Build the application for production.     |
| `npm test`          | Run unit tests with Karma and Jasmine.    |
| `npm run serve:ssr` | Serve the production build with SSR.      |

## Deployment & Operations

While this is a portfolio project, it is built with production-readiness in mind.

### Docker Configuration

A multi-stage `Dockerfile` is used to create a lean, optimized production image.

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --configuration production

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/dist ./dist
EXPOSE 4000
CMD ["node", "dist/portfolio/server/server.mjs"]
```

### Reverse Proxy with Nginx

For a production deployment, Nginx would be used as a reverse proxy to handle SSL termination, caching of static assets, and request forwarding to the Node.js server.

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;

    # Security headers
    add_header Strict-Transport-Security "max-age=63072000";

    # Serve static assets with aggressive caching
    location ~* \.(js|css|png|jpg|svg)$ {
        root /var/www/portfolio/dist/portfolio/browser;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Proxy to the Node.js application
    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
