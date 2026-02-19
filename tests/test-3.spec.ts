import { test, expect } from '@playwright/test';

test.setTimeout(60_000);

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const username = page.getByPlaceholder('Username');
  const password = page.getByPlaceholder('Password');
  const loginBtn = page.getByRole('button', { name: /^Login$/ });

  await expect(username).toBeVisible();

  await username.fill('Admin');
  await expect(username).toHaveValue('Admin');
  
  await page.pause();

  await password.fill('admin123');
  await expect(password).toHaveValue('admin123');

  await loginBtn.click();

  // ждём реально успешный вход
  await expect(page).toHaveURL(/\/dashboard\/index/);
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();

  // Leave
  const leaveLink = page.getByRole('link', { name: /^Leave$/i });
  await expect(leaveLink).toBeVisible();
  await leaveLink.click();
  await expect(page).toHaveURL(/\/leave\/viewLeaveList/);

  // Admin
  const adminLink = page.getByRole('link', { name: /^Admin$/i });
  await expect(adminLink).toBeVisible();
  await adminLink.click();
  await expect(page).toHaveURL(/\/admin\//);
  
});
