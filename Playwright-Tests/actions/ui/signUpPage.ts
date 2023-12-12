import { expect, Locator, Page } from '@playwright/test'

// This class contains all element and actions for Signup Page

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export class SignUpPage {
  private readonly page: Page
  // signup locators
  private readonly name: Locator
  private readonly signUpEmail: Locator
  private readonly signup: Locator
  // Login locators
  private readonly password: Locator
  private readonly loginEmail: Locator
  private readonly login: Locator



  constructor(page: Page) {
    this.page = page
    this.name = page.getByPlaceholder('Name')
    this.signUpEmail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    this.signup = page.getByRole('button').filter({ hasText: 'Signup' })
    this.password = page.getByPlaceholder('Password')
    this.loginEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    this.login = page.getByRole('button').filter({ hasText: 'Login' })

  }

  //Actions

  async typeName(value: string) {
    await this.name.fill(value)
  }

  async typeEmail(value: string) {
    await this.signUpEmail.fill(getRandomNumber(1000,100000)+value)
  }

  async clickSignUpButton() {
    await this.signup.click()
  }

  async typeloginEmail(value: string) {
    await this.loginEmail.fill(value)
  }

  async typePassword(value: string) {
    await this.password.fill(getRandomNumber(1000,100000)+value)
  }

  async clickLoginButton() {
    await this.login.click()
  }

  async checkWrongDetailsMessage(){
    await expect(this.page.getByText('Your email or password is incorrect!', { exact: true })).toBeVisible();
  }

}

