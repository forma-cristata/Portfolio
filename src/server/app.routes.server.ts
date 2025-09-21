/**
 * SERVER ROUTES CONFIGURATION - Angular Universal Server Routing
 *
 * This file defines server-specific routing configuration for Angular Universal
 * server-side rendering. It specifies how different routes should be handled
 * during the SSR process, including render modes and caching strategies.
 *
 * Purpose:
 * - Configure server-side rendering behavior for different routes
 * - Define render modes (SSR, prerender, client-side) for optimal performance
 * - Set up route-specific SSR optimizations and caching
 * - Control server-side navigation and route handling
 * - Enable strategic pre-rendering for static content
 *
 * Features:
 * - Route-specific render mode configuration
 * - Prerendering support for static pages
 * - Server-side routing optimization
 * - Integration with Angular Universal SSR engine
 * - Flexible routing strategies for different content types
 *
 * Used by: Server app config (app.config.server.ts), Angular Universal SSR
 */

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'spinners',
		renderMode: RenderMode.Server,
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
