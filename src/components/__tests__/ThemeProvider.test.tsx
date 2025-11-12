import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

// Test component that uses the theme
const ThemeConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Remove dark class from document
    document.documentElement.classList.remove('dark');
  });

  it('provides default light theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    
    const themeDisplay = screen.getByTestId('current-theme');
    expect(themeDisplay.textContent).toBe('light');
  });

  it('toggles theme when toggleTheme is called', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    
    const themeDisplay = screen.getByTestId('current-theme');
    const toggleButton = screen.getByText('Toggle Theme');
    
    expect(themeDisplay.textContent).toBe('light');
    
    fireEvent.click(toggleButton);
    expect(themeDisplay.textContent).toBe('dark');
    
    fireEvent.click(toggleButton);
    expect(themeDisplay.textContent).toBe('light');
  });

  it('adds dark class to document when theme is dark', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByText('Toggle Theme');
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);
    
    expect(localStorage.getItem('theme')).toBe('dark');
    
    fireEvent.click(toggleButton);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
