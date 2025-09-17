/**
 * ROOT APP COMPONENT - Main Application Component
 *
 * This is the root component of the Angular application that serves as the main
 * entry point and container for the entire application UI. It provides the
 * fundamental structure and acts as the host for all other components through routing.
 *
 * Purpose:
 * - Define the main application structure and layout
 * - Provide router outlet for navigation between different views
 * - Set up global application state and configuration
 * - Serve as the foundation for the component tree
 *
 * Features:
 * - Router outlet for dynamic component loading based on routes
 * - Application title and metadata
 * - Global styling and layout structure
 *
 * Used by: Angular bootstrap process, rendered as the main app container
 */

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, RouterLink],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Portfolio';
}
