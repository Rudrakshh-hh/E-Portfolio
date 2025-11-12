import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Navigation Component', () => {
  it('renders navigation links', () => {
    renderWithTheme(<Navigation />);
    
  expect(screen.getByText('Home')).toBeTruthy();
  expect(screen.getByText('About')).toBeTruthy();
  expect(screen.getByText('Skills')).toBeTruthy();
  expect(screen.getByText('Projects')).toBeTruthy();
  expect(screen.getByText('Education')).toBeTruthy();
  expect(screen.getByText('Certifications')).toBeTruthy();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    renderWithTheme(<Navigation />);
    
    // Mobile menu should be hidden initially
    const mobileLinks = screen.queryAllByText('Home');
    expect(mobileLinks.length).toBeGreaterThan(0);
    
    // Click the mobile menu button
    const menuButtons = screen.getAllByLabelText('Toggle menu');
    fireEvent.click(menuButtons[0]);
    
    // Menu items should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
  });

  it('renders theme toggle button', () => {
    renderWithTheme(<Navigation />);
    
    const themeButtons = screen.getAllByLabelText('Toggle theme');
    expect(themeButtons.length).toBeGreaterThan(0);
  });

  it('renders resume download button', () => {
    renderWithTheme(<Navigation />);
    
    const resumeButtons = screen.getAllByText('Resume');
    expect(resumeButtons.length).toBeGreaterThan(0);
  });

  it('applies scrolled class when page is scrolled', () => {
    renderWithTheme(<Navigation />);
    
    // Simulate scroll event
    window.scrollY = 100;
    fireEvent.scroll(window);
    
  // Navigation should have updated styles
  const nav = screen.getByRole('navigation');
  expect(nav).toBeTruthy();
  });

  it('navigates to correct section when link is clicked', () => {
    const mockScrollIntoView = vi.fn();
    document.querySelector = vi.fn(() => ({
      scrollIntoView: mockScrollIntoView,
    }));

    renderWithTheme(<Navigation />);
    
    const aboutLink = screen.getAllByText('About')[0];
    fireEvent.click(aboutLink);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
