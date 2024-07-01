import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';
import CartPage from '../pageobjects/cart.page.js';

// import SecurePage from '../pageobjects/secure.page.js';
// import { and } from 'wdio-wait-for';

const pages = {
    login: LoginPage
}

// Given('I am on the {string} page', async (page) => {
//     await pages[page].open()
// });

// When(/^I login with "(\w+)" and "(\w+)"$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

//LOGIN
Given(/^user is on Saucedemo login page$/, async () => {
	await LoginPage.open()
    // return true;
});

Given('user input username with {string}', async (username) => {
   await LoginPage.inputusername(username)
  })
  
Given('user input password with {string}', async (password) => {
   await LoginPage.textBoxPassword.setValue(password)
  })
When('user click login button', async () => {
   await LoginPage.buttonLogin.click()
  })  
Then('user should redirect to the homepage', async () => {
    // await expect(DashboardPage.cartIcon).toBeDisplayed()
    await DashboardPage.validateOnPage()
  })


//Dashboard
Given('user is on Saucedemo Dashboard page', async () => {
     await DashboardPage.open()
   })

When('user click add button on catalog', async () => {
   await DashboardPage.buttonAdd.click()
})

When('user click cart icon on top righ', async () => {
  await DashboardPage.buttonCart.click()
})

When('user click add button on catalog two', async () => {
    await DashboardPage.buttonAdd2.click()
})

When('user click add button on catalog three', async () => {
    await DashboardPage.buttonAdd3.click()
})
Then('user should redirect to the your cart page', async () => {
    await CartPage.validateOnPage()
 })

  



  



