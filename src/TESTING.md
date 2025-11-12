# Testing Guide

This document outlines the testing strategy and instructions for the E-Portfolio website.

## 🧪 Testing Stack

- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers for DOM assertions

## 📦 Installation

All testing dependencies should be installed with:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with coverage
```bash
npm test -- --coverage
```

### Run specific test file
```bash
npm test Hero.test
```

## 📁 Test Structure

```
components/
├── __tests__/
│   ├── Hero.test.tsx
│   ├── Navigation.test.tsx
│   ├── Projects.test.tsx
│   ├── Skills.test.tsx
│   └── ThemeProvider.test.tsx
test/
└── setup.ts
```

## ✅ Test Coverage

### Current Test Files

1. **Hero.test.tsx**
   - Renders name and title
   - Displays CTA buttons
   - Renders social links
   - Tests scroll functionality
   - Verifies profile image

2. **Navigation.test.tsx**
   - Renders all nav links
   - Mobile menu toggle
   - Theme toggle
   - Resume download
   - Scroll-based styling
   - Section navigation

3. **Projects.test.tsx**
   - Renders all project cards
   - Displays descriptions
   - Shows tech stack badges
   - Renders role badges
   - Displays action buttons
   - Lazy loading verification

4. **Skills.test.tsx**
   - Renders skill categories
   - Displays programming languages
   - Shows progress percentages
   - Lists frameworks/libraries
   - Displays soft skills
   - Renders additional tech tags

5. **ThemeProvider.test.tsx**
   - Default theme
   - Theme toggling
   - Dark class application
   - LocalStorage persistence

## 📝 Writing New Tests

### Basic Component Test Template

```typescript
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```typescript
import { fireEvent } from '@testing-library/react';

it('handles button click', () => {
  render(<YourComponent />);
  
  const button = screen.getByRole('button', { name: 'Click Me' });
  fireEvent.click(button);
  
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```

### Testing with Theme Provider

```typescript
const renderWithTheme = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

it('works with theme', () => {
  renderWithTheme(<YourComponent />);
  // Your assertions
});
```

## 🎯 Testing Best Practices

### 1. Test User Behavior, Not Implementation

❌ Bad:
```typescript
expect(component.state.value).toBe('test');
```

✅ Good:
```typescript
expect(screen.getByText('test')).toBeInTheDocument();
```

### 2. Use Accessible Queries

Prefer queries in this order:
1. `getByRole` - Most accessible
2. `getByLabelText` - Form elements
3. `getByText` - Non-interactive elements
4. `getByTestId` - Last resort

### 3. Test Accessibility

```typescript
it('is keyboard accessible', () => {
  render(<Button>Click Me</Button>);
  
  const button = screen.getByRole('button');
  expect(button).toHaveFocus();
});
```

### 4. Mock External Dependencies

```typescript
import { vi } from 'vitest';

vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' }))
}));
```

## 🔍 Common Testing Patterns

### Testing Async Operations

```typescript
import { waitFor } from '@testing-library/react';

it('loads data', async () => {
  render(<AsyncComponent />);
  
  await waitFor(() => {
    expect(screen.getByText('Loaded!')).toBeInTheDocument();
  });
});
```

### Testing Forms

```typescript
it('submits form', () => {
  const handleSubmit = vi.fn();
  render(<Form onSubmit={handleSubmit} />);
  
  const input = screen.getByLabelText('Email');
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  
  const submit = screen.getByRole('button', { name: 'Submit' });
  fireEvent.click(submit);
  
  expect(handleSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
});
```

### Testing Navigation

```typescript
it('navigates to section', () => {
  const mockScrollIntoView = vi.fn();
  document.querySelector = vi.fn(() => ({
    scrollIntoView: mockScrollIntoView,
  }));
  
  render(<Navigation />);
  
  const link = screen.getByText('About');
  fireEvent.click(link);
  
  expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
});
```

## 📊 Coverage Goals

Target coverage metrics:
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

### View Coverage Report

After running tests with coverage:
```bash
npm test -- --coverage
```

Open the HTML report:
```bash
open coverage/index.html
```

## 🐛 Debugging Tests

### Using debug()

```typescript
import { render, screen } from '@testing-library/react';

it('debugs output', () => {
  const { debug } = render(<Component />);
  
  // Prints entire DOM
  debug();
  
  // Prints specific element
  debug(screen.getByRole('button'));
});
```

### Using logRoles()

```typescript
import { render, logRoles } from '@testing-library/react';

it('shows available roles', () => {
  const { container } = render(<Component />);
  logRoles(container);
});
```

## 🔧 Troubleshooting

### Test Fails: "Unable to find element"

**Solution**: Use `screen.debug()` to see what's rendered
```typescript
screen.debug();
```

### Test Fails: "Not wrapped in act()"

**Solution**: Use `waitFor` for async updates
```typescript
await waitFor(() => {
  expect(screen.getByText('Updated')).toBeInTheDocument();
});
```

### Mock Functions Not Working

**Solution**: Ensure mocks are defined before imports
```typescript
vi.mock('./module', () => ({
  default: vi.fn()
}));
```

## 📚 Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🎓 Testing Checklist

Before committing code, ensure:

- [ ] All tests pass
- [ ] New features have tests
- [ ] Coverage hasn't decreased
- [ ] Tests are meaningful (not just for coverage)
- [ ] Accessibility is tested
- [ ] Edge cases are covered
- [ ] Tests are maintainable and readable

---

Happy Testing! 🧪
