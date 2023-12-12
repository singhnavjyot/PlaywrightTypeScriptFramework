import {
    expect,
    Locator,
    Page
} from '@playwright/test'

// This class contains all element and actions for Carts Page

export class CartsPage {
    private readonly page: Page
    private readonly cartTable: Locator
    private readonly cartItems: Locator


    constructor(page: Page) {
        this.page = page
        this.cartTable = page.locator('#cart_info')
        this.cartItems = this.cartTable.getByRole('row')
    }

    //Actions

    async checkCartItems(containsValue: string, notContainsValue: string) {
        const rowCount = await this.cartTable.locator('tr').count()
        for (let i = 1; i < rowCount; i++) {
            await expect(this.cartItems.nth(i).locator('td').nth(1).getByRole('link')).toHaveText(new RegExp(containsValue, 'i'))
            await expect(this.cartItems.nth(i).locator('td').nth(1).getByRole('link')).not.toHaveText(new RegExp(notContainsValue, 'i'))
        }
        
    }
}