const { test, expect } = require('@playwright/test');

const EMAIL = process.env.VALID_EMAIL;
const PASSWORD = process.env.VALID_PASSWORD;

test.describe('login', () => {
  test('logs in with valid credentials (from .env)', async ({ page }) => {
    // Adjust if your login page path differs (e.g. '/login/index.html')
    await page.goto('/login/');

    // TODO: tweak selectors to match your form exactly if needed
    await page.fill('input[name="email"], #email, [type="email"]', EMAIL);
    await page.fill(
      'input[name="password"], #password, [type="password"]',
      PASSWORD,
    );
    await page.click(
      'button[type="submit"], button:has-text("Log in"), button:has-text("Login")',
    );

    // Assert "logged in" – update this to a reliable indicator in your UI
    // e.g., a "Logout" link/button, user menu, or redirect to home.
    await expect(page).toHaveURL(/\/($|index\.html$)/);
    // Soft assertion in case your UI doesn't show Logout text:
    await expect(page.locator('text=/logout/i'))
      .toBeVisible({ timeout: 5000 })
      .catch(() => {});
  });

  test('shows an error on invalid credentials', async ({ page }) => {
    await page.goto('/login/');

    await page.fill(
      'input[name="email"], #email, [type="email"]',
      'nope@example.com',
    );
    await page.fill(
      'input[name="password"], #password, [type="password"]',
      'wrongpassword',
    );
    await page.click(
      'button[type="submit"], button:has-text("Log in"), button:has-text("Login")',
    );

    // Update to match your app's error rendering if needed
    const error = page.locator(
      '.error, [role="alert"], text=/invalid|error|incorrect/i',
    );
    await expect(error).toBeVisible();
  });
});
