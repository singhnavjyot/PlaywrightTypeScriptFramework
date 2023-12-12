import { expect, Locator, Page } from '@playwright/test'

// This class contains all element and actions for PostSignup Success Page

export class SuccessPage {
  private readonly page: Page
  private readonly title: Locator
  private readonly message: Locator


  constructor(page: Page) {
    this.page = page
    this.title = page.getByText('Account Created!')
    this.message = page.getByText('Congratulations! Your new account has been successfully created!')
  }

  //Actions

  async checkTitle(message: string) {
    await expect(this.title).toContainText(message)
  }

  async checkMessage(message: string) {
    await expect(this.message).toContainText(message)
  }

}

