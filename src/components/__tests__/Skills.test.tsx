import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
  it('renders all skill categories', () => {
    render(<Skills />);
    
  expect(screen.getByText('Languages')).toBeTruthy();
  expect(screen.getByText('Frameworks & Libraries')).toBeTruthy();
  expect(screen.getByText('Tools & Technologies')).toBeTruthy();
  expect(screen.getByText('Soft Skills')).toBeTruthy();
  });

  it('displays programming languages', () => {
    render(<Skills />);
    
  expect(screen.getByText('JavaScript')).toBeTruthy();
  expect(screen.getByText('Python')).toBeTruthy();
  expect(screen.getByText('Java')).toBeTruthy();
  expect(screen.getByText('C++')).toBeTruthy();
  });

  it('shows skill progress percentages', () => {
    render(<Skills />);
    // Percentages removed from UI — ensure skill names still render (sanity)
    expect(screen.getByText('JavaScript')).toBeTruthy();
    expect(screen.getByText('Python')).toBeTruthy();
    expect(screen.getByText('Java')).toBeTruthy();
  });

  it('renders frameworks and libraries', () => {
    render(<Skills />);
    
  expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Tailwind CSS').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Bootstrap').length).toBeGreaterThan(0);
  });

  it('displays soft skills', () => {
    render(<Skills />);
    
  expect(screen.getByText('Problem Solving')).toBeTruthy();
  expect(screen.getByText('Team Collaboration')).toBeTruthy();
  expect(screen.getByText('Communication')).toBeTruthy();
  });

  it('renders additional technologies as tags', () => {
    render(<Skills />);
    
  expect(screen.getByText('REST APIs')).toBeTruthy();
  expect(screen.getByText('GraphQL')).toBeTruthy();
  expect(screen.getByText('TypeScript')).toBeTruthy();
  expect(screen.getByText('Jest')).toBeTruthy();
  });

  it('displays progress bars for skills', () => {
    render(<Skills />);
    // Progress bars removed; ensure no progressbar roles present
    const progressBars = document.querySelectorAll('[role="progressbar"]');
    expect(progressBars.length).toBe(0);
  });
});
