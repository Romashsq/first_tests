import { test, expect } from '@playwright/test';

test.describe('Tests for js', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://learn.javascript.ru/');
  })

test('test', async ({ page }) => {

await expect(page.getByRole('link', { name: 'Учебник' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Курсы', exact: true })).toBeVisible();
await expect(page.getByRole('link', { name: 'Форум' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Тесты знаний' })).toBeVisible();
await expect(page.locator('.theme-changer__icon.theme-changer__icon_dark-theme').first()).toBeVisible();
});

test('test for Text', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Учебник' })).toContainText('Учебник')
  await expect(page.getByRole('link', { name: 'Курсы', exact: true })).toContainText('Курсы');
  await expect(page.getByRole('link', { name: 'Форум' })).toContainText('Форум');
  await expect(page.getByRole('link', { name: 'Тесты знаний' })).toContainText('Тесты знаний');

});

test('test for href', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Учебник' })).toHaveAttribute('href','/')
  await expect(page.getByRole('link', { name: 'Курсы', exact: true })).toHaveAttribute('href','/courses')
  await expect(page.getByRole('link', { name: 'Форум' })).toHaveAttribute('href','https://javascript.ru/forum/')
  await expect(page.getByRole('link', { name: 'Тесты знаний' })).toHaveAttribute('href','/quiz')

});

test('test for transfet to other pages', async ({ page }) => {
  await page.getByRole('link', { name: 'Тесты знаний' }).click() 
  await expect(page).toHaveURL('https://learn.javascript.ru/quiz')
  
  await expect(page.getByRole('heading', { name: 'Тестирование знаний' })).toHaveAttribute('class','main__header-title')
});

})