/**
 * CLIENT APPLICATION CONFIGURATION - Angular App Config
 *
 * This file contains the main configuration for the client-side Angular application.
 * It defines all the providers, services, and configurations needed for the application
 * to run in the browser, including routing, change detection, and hydration settings.
 *
 * Purpose:
 * - Configure client-side application providers and services
 * - Set up routing with the Angular Router
 * - Enable client hydration for SSR applications
 * - Configure change detection strategies for optimal performance
 * - Define global application-wide dependencies
 *
 * Features:
 * - Zone-based change detection with event coalescing
 * - Router configuration with application routes
 * - Client hydration with event replay for SSR
 * - Extensible provider system for additional services
 *
 * Used by: Client bootstrap (main.ts), Angular application initialization
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
	],
};
