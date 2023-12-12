import {test} from '@playwright/test'
import { HomePage } from '../actions/ui/homePage'
import { SignUpPage } from '../actions/ui/signUpPage'
import { SuccessPage } from '../actions/ui/successPage'
import { EnterAccountInfo } from '../actions/ui/enterAccountInfo'
import { ProductsPage } from '../actions/ui/productPage'
import { CartsPage } from '../actions/ui/cartPage'

import config from '../actions/utils/config'

// tests for UI

test('Verify User Should be able to Signup', async ({ page }) => {
  await page.goto(config.baseUrl)
  const homePage = new HomePage(page)
  const signUpPage = new SignUpPage(page)
  const successPage = new SuccessPage(page)
  const enterAccountInfo = new EnterAccountInfo(page)
  await homePage.clickSignUp()
  await signUpPage.typeEmail('test01083983@mailinator.com')
  await signUpPage.typeName('FirstName LastName')
  await signUpPage.clickSignUpButton()
  await enterAccountInfo.selectMr()
  await enterAccountInfo.typePassword('12345678')
  await enterAccountInfo.typeFirstName('FirstName')
  await enterAccountInfo.typeLastName('LastName')
  await enterAccountInfo.typeAddress1('Sector 100')
  await enterAccountInfo.typeState('New Delhi')
  await enterAccountInfo.typeCity('New Delhi')
  await enterAccountInfo.typeZipcode('111111')
  await enterAccountInfo.typeMobile('1234567890')
  await enterAccountInfo.createAccountClick()
  await successPage.checkMessage('Congratulations! Your new account has been successfully created!')
  await successPage.checkTitle('Account Created!')
})


test('Verify User Login with Invalid and Valid Password', async ({ page }) => {
  await page.goto(config.baseUrl)
  const homePage = new HomePage(page)
  const signUpPage = new SignUpPage(page)
  await homePage.clickSignUp()
  await signUpPage.typeloginEmail('test01083983@mailinator.com')
  await signUpPage.typePassword('123456789')
  await signUpPage.clickLoginButton()
  await signUpPage.checkWrongDetailsMessage()
  await homePage.clickSignUp()
  await signUpPage.typeloginEmail('test01083983@mailinator.com')
  await signUpPage.typePassword('12345678')
  await signUpPage.clickLoginButton()
})


test('User add items to cart from csv test data', async ({ page }) => {
  await page.goto(config.baseUrl+'/products')
  const productsPage = new ProductsPage(page)
  const cartPage = new CartsPage(page)
  await productsPage.addToCart()
  await page.goto(config.baseUrl+'/view_cart')
  await cartPage.checkCartItems('BLUE','Yellow')
})