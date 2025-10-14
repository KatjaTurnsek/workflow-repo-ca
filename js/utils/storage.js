const tokenKey = 'token';
const userKey = 'user';

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey);
  return user ? user.name : null;
}

export function clearKey(key) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

/**
 * Reads a user object from localStorage and returns a display name.
 * Returns null if missing or malformed.
 */
export function getUserName() {
  try {
    const raw = localStorage.getItem('user'); // change 'user' if your app uses a different key
    if (!raw) return null;
    const user = JSON.parse(raw);
    // support common shapes
    return user?.name ?? user?.username ?? null;
  } catch {
    return null;
  }
}
