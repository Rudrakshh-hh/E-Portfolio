import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
import '@testing-library/jest-dom';

describe('Projects Component', () => {
  it('renders all project cards', () => {
    render(<Projects />);
    
  // Should render 5 projects
  expect(screen.getByText('E-Commerce Platform')).toBeTruthy();
  expect(screen.getByText('Social Media Dashboard')).toBeTruthy();
  expect(screen.getByText('Task Management App')).toBeTruthy();
  expect(screen.getByText('Weather Forecast Mobile App')).toBeTruthy();
  expect(screen.getByText('Machine Learning Classifier')).toBeTruthy();
  });

  it('displays project descriptions', () => {
    render(<Projects />);
    
  const description = screen.getByText(/A full-stack e-commerce web application/i);
  expect(description).toBeTruthy();
  });

  it('renders tech stack badges for each project', () => {
    render(<Projects />);
    
    // Check for some tech stack items
    // Use getAllByText because the same tech may appear in multiple projects
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    expect(screen.getAllByText('MongoDB').length).toBeGreaterThan(0);
  });

  it('displays role badges', () => {
    render(<Projects />);
    // Multiple projects may share the same role, so assert presence by counting
    expect(screen.getAllByText('Full-Stack Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Frontend Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Mobile Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ML Engineer').length).toBeGreaterThan(0);
  });

  it('renders code and demo buttons for each project', () => {
    render(<Projects />);
    
    const codeButtons = screen.getAllByText('Code');
    const demoButtons = screen.getAllByText('Demo');
    
    // Should have 5 of each (one per project)
    expect(codeButtons).toHaveLength(5);
    expect(demoButtons).toHaveLength(5);
  });

  it('renders project images with lazy loading', () => {
    render(<Projects />);
    
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      // Use attribute check without jest-dom matcher
      expect(img.getAttribute('loading')).toBe('lazy');
    });
  });
});
