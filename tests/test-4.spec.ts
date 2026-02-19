import { test, expect } from '@playwright/test';




test('login + sidebar collapse', async ({ page }) => {
test.setTimeout(100_000)

  await test.step('Login', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  await test.step('Collapse sidebar', async () => {
    const sidebar = page.locator('aside.oxd-sidepanel');
    await sidebar.getByRole('button').click();

    await expect(sidebar).toHaveClass('oxd-sidepanel toggled');

    await sidebar.getByRole('button').click();

    await expect(sidebar).not.toHaveClass('oxd-sidepanel toggled');

  });

  await test.step('test of each buttons', async () => {
    const elements = [
      { name: 'Admin', locator: page.getByRole('link', { name: 'Admin' }) },
      { name: 'PIM', locator: page.getByRole('link', { name: 'PIM' }) },
      { name: 'Leave', locator: page.getByRole('link', { name: 'Leave', exact: true }) },
      { name: 'Time', locator: page.getByRole('link', { name: 'Time' }) },
      { name: 'Recruitment', locator: page.getByRole('link', { name: 'Recruitment' }) },
      { name: 'My Info', locator: page.getByRole('link', { name: 'My Info' }) },
      { name: 'Performance', locator: page.getByRole('link', { name: 'Performance' }) },
      { name: 'Dashboard', locator: page.getByRole('link', { name: 'Dashboard' }) },
    ];

    for (const { name, locator } of elements) {
      await test.step(`Check ${name}`, async () => {
        await expect.soft(locator).toBeVisible();
        await locator.click()
        await expect(locator).toHaveAttribute('href')
      });
    }
});

  await test.step('change something', async () => {
    
    await page.getByRole('link', { name: 'Admin' }).click()
    await expect(page.getByRole('heading', { name: 'Admin' })).toBeVisible()
    const checkbox = page.locator('.oxd-checkbox-input').first();
    await checkbox.click(); 
    await checkbox.check()


  })

  //finish deletting users and practicing bro you are doing so great 
});


