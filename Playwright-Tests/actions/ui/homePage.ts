import { expect, Locator, Page } from '@playwright/test'

// This contains all element and actions for HomePage

export class HomePage {
  private readonly page: Page
  private readonly signUpButton: Locator
  private readonly products: Locator


  constructor(page: Page) {
    this.page = page
    this.signUpButton = page.getByRole('link', { name: ' Signup / Login' })
    this.products = page.getByRole('link', { name: ' Products' })
  }

  //Actions

  async clickSignUp() {
    await this.signUpButton.click()
  }

  async clickProduct(){
    await this.products.click()
  }
}

