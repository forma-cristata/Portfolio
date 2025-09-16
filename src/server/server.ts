/**
 * EXPRESS SERVER SETUP - Node.js Server with Angular Universal
 *
 * This file configures and sets up the Express.js server that serves the Angular
 * application with server-side rendering (SSR) capabilities. It handles both static
 * file serving and dynamic server-side rendering of Angular components.
 *
 * Purpose:
 * - Configure Express.js server for Angular Universal SSR
 * - Serve static assets (JS, CSS, images) from the browser build
 * - Handle server-side rendering for all application routes
 * - Provide API endpoints for backend functionality
 * - Integrate with Angular SSR engine for optimal performance
 *
 * Features:
 * - Static file serving with caching optimization
 * - Angular Universal integration for SSR
 * - API endpoint support for REST services
 * - Production-ready server configuration
 * - Request handling with proper error management
 *
 * Used by: Node.js runtime, deployed as the main server application
 */

import {
	AngularNodeAppEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
	express.static(browserDistFolder, {
		maxAge: '1y',
		index: false,
		redirect: false,
	}),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
	angularApp
		.handle(req)
		.then(response => (response ? writeResponseToNodeResponse(response, res) : next()))
		.catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;
	app.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
