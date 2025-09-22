/**
 * CLIENT APPLICATION ROUTES - Angular Router Configuration
 *
 * This file defines all the client-side routes for the Angular application.
 * It configures the routing table that determines which components are loaded
 * for different URL paths in the browser, enabling single-page application navigation.
 *
 * Purpose:
 * - Define URL-to-component mappings for client-side navigation
 * - Configure route parameters, guards, and resolvers
 * - Set up lazy loading for feature modules
 * - Define wildcard and redirect routes
 * - Enable deep linking and browser history support
 *
 * Features:
 * - Declarative route configuration
 * - Support for nested and child routes
 * - Route guards for authentication and authorization
 * - Lazy loading capabilities for performance optimization
 * - Integration with Angular Router service
 *
 * Used by: Client app config (app.config.ts), Angular Router service
 */

import { Routes } from '@angular/router';
import { ContactMeComponent } from '../screens/contact-me/contact-me.component';
import { LuminovaComponent } from '../screens/luminova/luminova.component';
import { SHAuthComponent } from '../screens/shauth/shauth.component';
import { SpinnersComponent } from '../screens/spinners/spinners.component';

export const routes: Routes = [
	{ path: '', component: ContactMeComponent },
	{ path: 'luminova', component: LuminovaComponent },
	{ path: 'shauth', component: SHAuthComponent },
	{ path: 'spinners', component: SpinnersComponent },
];
