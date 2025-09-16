/**
 * SHARED TYPES AND INTERFACES - Common Type Definitions
 * 
 * This file contains shared TypeScript interfaces, types, and type definitions
 * that are used across both client and server code. It promotes type safety
 * and consistency throughout the application architecture.
 * 
 * Purpose:
 * - Define common interfaces shared between client and server
 * - Provide type definitions for API contracts and data models
 * - Ensure type consistency across application boundaries
 * - Enable better IntelliSense and development experience
 * - Facilitate maintainable and scalable code architecture
 * 
 * Features:
 * - Shared data model interfaces
 * - API request/response type definitions
 * - Common utility types and generic interfaces
 * - Type guards and validation helpers
 * - Cross-platform type compatibility
 * 
 * Used by: Client and server code, API services, data models
 */

// Example shared interface - customize as needed
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Example API response type - customize as needed
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Add your shared types and interfaces here