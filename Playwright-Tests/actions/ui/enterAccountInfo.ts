import { expect, Locator, Page } from '@playwright/test'

// This class contains all element and actions for AccountInfo Page Post Signup

export class EnterAccountInfo {
  private readonly page: Page
  private readonly mr: Locator
  private readonly password: Locator
  private readonly firstName: Locator
  private readonly lastName: Locator
  private readonly address1: Locator
  private readonly state: Locator
  private readonly city: Locator
  private readonly zipcode: Locator
  private readonly mobile: Locator
  private readonly createAccount: Locator

  constructor(page: Page) {
    this.page = page
    this.mr = page.getByLabel('Mr.')
    this.password = page.locator('#password')
    this.firstName = page.locator('#first_name')
    this.lastName = page.locator('#last_name')
    this.address1 = page.locator('#address1')
    this.state = page.locator('#state')
    this.city = page.locator('#city')
    this.zipcode = page.locator('#zipcode')
    this.mobile = page.getByLabel('Mobile Number ')
    this.createAccount = page.getByRole('button', { name: 'Create Account' })
  }

  //Actions

  async selectMr() {
    this.mr.check
  }

  async typePassword(password: string) {
    await this.password.fill(password)
  }

  async typeFirstName(firstname: string) {
    await this.firstName.fill(firstname)
  }

  async typeLastName(lastname: string) {
    await this.lastName.fill(lastname)
  }

  async typeAddress1(address1: string) {
    await this.address1.fill(address1)
  }

  async typeState(state: string) {
    await this.state.fill(state)
  }

  async typeCity(city: string) {
    await this.city.fill(city)
  }

  async typeZipcode(zip: string) {
    await this.zipcode.fill(zip)
  }

  async typeMobile(mobile: string) {
    await this.mobile.fill(mobile)
  }

  async createAccountClick() {
    this.createAccount.click()
  }

}

