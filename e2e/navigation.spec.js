const { test, expect } = require('@playwright/test');

const HOME_PATH = process.env.HOME_PATH || '/';

test.describe('navigation', () => {
  test('navigates from home to first venue and checks heading', async ({
    page,
  }) => {
    await page.goto(HOME_PATH);

    const listSelector =
      '.venue-list, [data-testid="venue-list"], [data-test="venue-list"]';
    const venueLinkSelector = [
      'a[href*="/venue/"]',
      'a[href*="venue"]',
      '.venue-card a',
      '[data-testid="venue-card"] a',
    ].join(', ');

    await Promise.race([
      page.waitForSelector(listSelector, { state: 'visible', timeout: 10000 }),
      page.waitForSelector(venueLinkSelector, {
        state: 'attached',
        timeout: 10000,
      }),
    ]);

    const firstVenue = page.locator(venueLinkSelector).first();
    await firstVenue.click();

    const heading = page.locator('h1, h2, [data-testid="venue-heading"]');
    await expect(heading).toContainText(/venue details/i, { timeout: 10000 });
  });
});
