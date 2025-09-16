/**
 * SERVER APPLICATION CONFIGURATION - Angular Universal Config
 * 
 * This file contains the server-specific configuration for the Angular application
 * when running in server-side rendering (SSR) mode. It merges client configuration
 * with server-only providers and settings needed for Angular Universal operation.
 * 
 * Purpose:
 * - Configure server-side rendering providers and services
 * - Set up server-specific routing and navigation
 * - Enable server rendering capabilities for Angular Universal
 * - Merge client config with server-only requirements
 * - Define server-side dependency injection configuration
 * 
 * Features:
 * - Server rendering provider integration
 * - Server-side routing configuration
 * - Merged configuration from client app config
 * - Angular Universal platform setup
 * - Server-optimized application bootstrapping
 * 
 * Used by: Server bootstrap (main.server.ts), Angular Universal SSR process
 */

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from '../client/app/app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
