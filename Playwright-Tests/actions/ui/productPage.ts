import { expect, Locator, Page } from '@playwright/test'
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// This class contains all element and actions for Products Page

const productIds = parse(fs.readFileSync(path.join(__dirname, 'testData.csv')), {
    columns: true,
    skip_empty_lines: true
  });

export class ProductsPage {
  private readonly page: Page
  private readonly searchField: Locator
  private readonly search: Locator
  private readonly continueShopping: Locator


  constructor(page: Page) {
    this.page = page
    this.searchField = page.locator('#search_product')
    this.search = page.locator('#submit_search')
    this.continueShopping = page.getByRole('button').filter({ hasText: 'Continue Shopping' })
   
  }

  //Actions

  async clickSearch() {
    await this.search.click()
  }

  async typeSearchtext(search: string){
    await this.searchField.fill(search)
  }

  async addToCart(){
    for (const products of productIds){
        await this.page.getByTestId(products.product_id).filter({ hasText: 'Add to cart' }).first().click()
        await this.continueShopping.click()
        }
  }

}
