import { describe, it, expect, beforeEach } from 'vitest';
import { getUserName, saveUser } from './storage.js';

beforeEach(() => localStorage.clear());

describe('getUserName', () => {
  it('returns the name from the user object in storage', () => {
    // using your existing helper to mirror real usage
    saveUser({ name: 'Katja' });
    expect(getUserName()).toBe('Katja');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUserName()).toBeNull();
  });
});
