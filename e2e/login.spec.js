const { test, expect } = require('@playwright/test');

const EMAIL = process.env.VALID_EMAIL;
const PASSWORD = process.env.VALID_PASSWORD;
const LOGIN_PATH = process.env.LOGIN_PATH || '/login/index.html';

const emailSel = 'input[name="email"], #email, input[type="email"]';
const passSel = 'input[name="password"], #password, input[type="password"]';
const submitSel = [
  'button[type="submit"]',
  'button:has-text("Log in")',
  'button:has-text("Login")',
  'button:has-text("Sign in")',
  'input[type="submit"]',
].join(', ');

test.describe('login', () => {
  test('logs in with valid credentials', async ({ page }) => {
    await page.goto(LOGIN_PATH);

    await page.waitForSelector(emailSel, { timeout: 5000 });
    await page.waitForSelector(passSel, { timeout: 5000 });

    await page.locator(emailSel).first().fill(EMAIL);
    await page.locator(passSel).first().fill(PASSWORD);
    await page.locator(submitSel).first().click();

    try {
      await page.waitForLoadState('networkidle');
    } catch {
      // Known issue with SPAs – continue regardless
    }

    await page.waitForFunction(
      () => localStorage.getItem('token') && localStorage.getItem('user'),
      { timeout: 15000 },
    );
  });

  test('shows error on invalid credentials', async ({ page }) => {
    await page.goto(LOGIN_PATH);

    await page.locator(emailSel).first().fill('nope@example.com');
    await page.locator(passSel).first().fill('wrongpassword');
    await page.locator(submitSel).first().click();

    const error = page.locator(
      [
        'text=/noroff\\.no|stud\\.noroff\\.no/i',
        '.error',
        '[role="alert"]',
        'text=/invalid|incorrect|failed|error/i',
      ].join(', '),
    );

    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });
});
