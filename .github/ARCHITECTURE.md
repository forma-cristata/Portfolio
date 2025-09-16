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
