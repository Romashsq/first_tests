import { test, expect, Page } from '@playwright/test';

const elements = [
  {
    locator: (page: Page) => (page.getByRole('link', { name: 'Учебник' }))
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Курсы', exact: true })
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Форум' })
  },

  {
    locator: (page: Page) => page.getByRole('link', { name: 'Тесты знаний' })
  },
  {
    locator: (page: Page) => page.locator('.theme-changer__icon.theme-changer__icon_dark-theme').first()
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Учебник' })
  },
]

test.describe('Tests for js', () => {


test('test', async ({ page }) => {

elements.forEach(({locator}) => {
  test.step('Checking step for each test', async () => {
    await expect.soft(locator(page)).toBeVisible()
  })
})
});

test.fixme('test for Text', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Учебник' })).toContainText('Учебник')
  await expect(page.getByRole('link', { name: 'Курсы', exact: true })).toContainText('Курсы');
  await page.pause();
  await expect(page.getByRole('link', { name: 'Форум' })).toContainText('Форум');
  await expect(page.getByRole('link', { name: 'Тесты знаний' })).toContainText('Тесты знаний');

});

test.fail('test for href', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Учебник1' })).toHaveAttribute('href','/')
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