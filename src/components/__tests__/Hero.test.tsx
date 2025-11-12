import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders hero section with name and title', () => {
    render(<Hero />);
    
  // The component displays the author's actual name
  expect(screen.getByText('Rudraksh Bhatt')).toBeTruthy();
  expect(screen.getByText('Aspiring Software Engineer')).toBeTruthy();
  });

  it('displays call-to-action buttons', () => {
    render(<Hero />);
    
  expect(screen.getByText('View Projects')).toBeTruthy();
  expect(screen.getByText('Download Resume')).toBeTruthy();
  });

  it('renders social media links', () => {
    render(<Hero />);
    
    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const emailLink = screen.getByLabelText('Email');
    
  expect(githubLink).toBeTruthy();
  expect(linkedinLink).toBeTruthy();
  expect(emailLink).toBeTruthy();
  });

  it('scrolls to projects section when View Projects is clicked', () => {
    const mockScrollIntoView = vi.fn();
    document.querySelector = vi.fn(() => ({
      scrollIntoView: mockScrollIntoView,
    }));

    render(<Hero />);
    
    const viewProjectsBtn = screen.getByText('View Projects');
    fireEvent.click(viewProjectsBtn);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('renders profile image with correct alt text', () => {
    render(<Hero />);
    
  const profileImage = screen.getByAltText('Rudraksh Bhatt');
  expect(profileImage).toBeTruthy();
  });
});
