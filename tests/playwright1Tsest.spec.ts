import { test, expect } from '@playwright/test';

test('header elements', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: /dark/i })
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: /search/i })
  ).toBeVisible();
});

test('header elements have valid names', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright');
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
});




test('header checking elements a', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href', '/');
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute('href', '/docs/api/class-playwright');
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute('href', '/community/welcome');
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
});


test('check of switching dark mode ', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Switch between dark and light' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
});

test('test Get started button', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started2');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href','/docs/intro1')
  await page.getByRole('link', { name: 'Get started' }).click()
  await expect.soft(page).toHaveURL('https://playwright.dev/docs/intro')
});

