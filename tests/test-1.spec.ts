import { test, expect, Page } from '@playwright/test';
import { log } from 'node:console';
import { text } from 'node:stream/consumers';

const elements = [

  {
    locator: (page: Page) => page.getByRole('link', { name: 'Учебник' })
  },
  
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Учебник' })
  },

  {
    locator: (page: Page) => page.getByRole('link', { name: 'Учебник' })
  },

  {
    locator: (page: Page) => page.getByRole('link', { name: 'Тесты знаний' })
  },
]

test.describe('first', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('https://learn.javascript.ru/');
    
  })

  test('tst of step', async ({page}) => { 

    elements.forEach(({locator}) => { 

      test.step('every step', async () => {

        await expect.soft(locator(page)).toBeVisible()

      })

    })

  })

})

const arrayNames = [
  {
    login: 'Roman'
  },
  {
    login: 'lol'
  },
  {
    login: '123'
  },
  {
    login: 'LolLL'
  },
  {
    login: 'Roman'
  },

]

test('test', async ({page}) => {

  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  const Input1 = page.getByRole('textbox', { name: 'What needs to be done?' })


  for(const {login} of arrayNames){



      await Input1.fill(login)

      await Input1.press('Enter')
      await expect(page.getByTestId('todo-title').last()).toHaveText(login)

      
  }

})

