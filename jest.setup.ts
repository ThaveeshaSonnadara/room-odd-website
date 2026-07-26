import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion tests in jsdom environment
class IntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver;