import {test, expect } from '@playwright/test'
import { APIPage } from '../actions/api/toDo.api.actions'

// Test for api calls

    test('User Should be able to create account via api', async ({ page }) => {
        const apiPage = new APIPage(page)
        const result = await apiPage.createAccount()
        expect(result.status()).toEqual(200)
        const respBody = await result.json()
        console.log(respBody)
        expect(respBody.responseCode).toEqual(201)
        expect(respBody.message).toEqual('User created!')
    })

    test('User Should not be able to login with invalid details', async ({ page }) => {
        const apiPage = new APIPage(page)
        const result = await apiPage.loginCheck("test1230978@testmail.com", "123456789")
        expect(result.status()).toEqual(200)
        const respBody = await result.json()
        console.log(respBody)
        expect(respBody.responseCode).toEqual(404)
        expect(respBody.message).toEqual('User not found!')
    })

    test('User Should be able to login with valid details', async ({ page }) => {
        const apiPage = new APIPage(page)
        const result = await apiPage.loginCheck("test1230978@testmail.com", "12345678")
        expect(result.status()).toEqual(200)
        const respBody = await result.json()
        console.log(respBody)
        expect(respBody.responseCode).toEqual(200)
        expect(respBody.message).toEqual('User exists!')
    })

    test('User Should be able to search', async ({ page }) => {
        const apiPage = new APIPage(page)
        const resultBlue = await apiPage.search('Blue')
        expect(resultBlue.status()).toEqual(200)
        const respBody = await resultBlue.json()
        console.log(respBody)
        for (var i = 0; i < 5; i++) {
            expect(respBody.products[i].name).toContain('Blue')
        }
        expect(respBody.responseCode).toEqual(200)
        const resultYellow = await apiPage.search('Yellow')
        const respBodyYellow = await resultYellow.json()
        expect(respBodyYellow.products.length).toEqual(0)
    })