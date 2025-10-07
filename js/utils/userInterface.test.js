import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath(href, currentPath)', () => {
  it('true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('true for "/" when path is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('true for "/" when path is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('true when current path includes the href', () => {
    expect(isActivePath('/blog', '/blog/article-123')).toBe(true);
  });

  it("false when paths don't match", () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
