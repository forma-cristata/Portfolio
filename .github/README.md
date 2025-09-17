# Portfolio - Angular Universal Application

Server-side rendered portfolio application built with Angular Universal, featuring clean client/server separation and comprehensive tooling for maintainability and performance.

## Technology Stack

| Category      | Technologies                            |
|---------------|-----------------------------------------|
| **Frontend**  | Angular 19, TypeScript, SCSS, RxJS      |
| **Backend**   | Node.js, Express.js, Angular Universal  |
| **Development** | Angular CLI, ESLint, Prettier, Karma   |

## Architecture

### Core Principles
- **Separation of Concerns**: Clear boundaries between client, server, and shared code
- **Type Safety**: Comprehensive TypeScript usage across all layers
- **Performance-First**: Optimized for SSR and client-side performance

### Project Structure
```
src/
├── client/                    # Client-side Angular application
│   ├── app/                   # Core application shell with routing
│   │   ├── app.component.*    # Root component with navigation
│   │   ├── app.config.ts      # Application configuration
│   │   └── app.routes.ts      # Route definitions
│   └── screens/               # Feature screen components
│       ├── home/              # Portfolio landing page
│       └── spinners/          # Loading animations showcase
├── server/                    # Server-side rendering
│   ├── main.server.ts         # SSR bootstrap
│   └── server.ts              # Express server setup
└── shared/                    # Shared utilities and types
    └── types.ts               # Common TypeScript interfaces
```

### Routing
- **Root Route** (`/`): HomeComponent with portfolio overview
- **Spinners Route** (`/spinners`): Interactive loading demonstrations
- **Navigation**: Integrated router links for seamless transitions

## Development Setup

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Quick Start
```bash
git clone <repository-url>
cd portfolio
npm install
npm start
```

Application available at `http://localhost:4200/`

### Scripts
| Command             | Description                           |
|---------------------|---------------------------------------|
| `npm start`         | Development server                    |
| `npm run build`     | Production build                      |
| `npm test`          | Unit tests                            |
| `npm run serve:ssr` | Production SSR server                 |

## Development Tools

### Code Quality
- **ESLint**: Angular-specific linting with TypeScript support
- **Prettier**: Consistent formatting with 120-character lines
- **VS Code Integration**: Auto-formatting and linting on save

### Testing
- **Jasmine**: Unit testing framework
- **Karma**: Test runner with Chrome integration
- **Coverage**: Code coverage reporting
