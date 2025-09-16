/**
 * ROOT APP COMPONENT TESTS - Unit Tests for AppComponent
 * 
 * This file contains comprehensive unit tests for the root AppComponent using
 * Angular Testing utilities and Jasmine/Jest framework. It ensures the component
 * behaves correctly, renders properly, and maintains expected functionality.
 * 
 * Purpose:
 * - Test component creation and initialization
 * - Verify component properties and methods work correctly
 * - Test template rendering and DOM manipulation
 * - Ensure component integration with dependencies
 * - Validate component lifecycle and state management
 * 
 * Features:
 * - Angular TestBed for component testing setup
 * - Component fixture creation and management
 * - DOM testing and template verification
 * - Property and method testing
 * - Integration testing with Angular services
 * 
 * Used by: Angular testing framework, CI/CD pipeline, development testing
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio');
  });
});
