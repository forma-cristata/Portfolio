/**
 * CLIENT BOOTSTRAP - Angular Application Entry Point
 *
 * This file serves as the main entry point for the client-side Angular application.
 * It bootstraps the root AppComponent using the browser platform and applies
 * the client-side application configuration including routing, services, and providers.
 *
 * Purpose:
 * - Initialize the Angular application in the browser
 * - Apply client-specific configuration and providers
 * - Handle client-side hydration for SSR applications
 * - Set up error handling for the application bootstrap process
 *
 * Used by: Angular CLI build process, referenced in angular.json as browser entry point
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
