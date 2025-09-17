/**
 * SERVER BOOTSTRAP - Angular Universal Entry Point
 *
 * This file serves as the main entry point for server-side rendering (SSR) of the
 * Angular application. It bootstraps the Angular app on the server using the
 * Angular Universal platform, enabling pre-rendering of pages for better SEO and
 * initial page load performance.
 *
 * Purpose:
 * - Initialize Angular application on the server for SSR
 * - Apply server-specific configuration and providers
 * - Enable server-side pre-rendering of Angular components
 * - Handle server-side routing and navigation
 * - Provide context for server-side bootstrap operations
 *
 * Features:
 * - Angular Universal bootstrapping
 * - Server-side configuration integration
 * - Context-aware server rendering
 * - Integration with Express.js server
 *
 * Used by: Express server (server.ts), Angular SSR build process
 */

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../client/app/app.component';
import { config } from './app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
