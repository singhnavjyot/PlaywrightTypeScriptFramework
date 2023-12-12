import { Page } from '@playwright/test'
import { faker } from "@faker-js/faker";
import config from '../utils/config'

// All API Actions

export class APIPage {
  private readonly page: Page

  constructor(page: Page) {
    this.page = page
  }


  async createAccount() {
    return await this.page.request.post(config.baseUrl+'/api/createAccount', {
    form : {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      title: faker.person.prefix(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address1: faker.location.streetAddress(),
      country: faker.location.country(),
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      city: faker.location.city(),
      mobile_number: faker.phone.number(),
  },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  };


  async loginCheck(email: string, password: string) {
    return await this.page.request.post(config.baseUrl+'/api/verifyLogin', {
    form : {
      email:email,
      password:password},
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  };

  async search(searchText: string) {
    return await this.page.request.post(config.baseUrl+'/api/searchProduct', {
    form : {
      search_product:searchText
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  };
  
}
