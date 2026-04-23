import { test, expect } from '@playwright/test';

test('MergeLeads', async ({ page, context }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    // Login
    await page.locator("#username").fill("demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator("//input[contains(@class,'decorativeSubmit')]").click()
    await page.locator(".crmsfa").click()

    // Click on Leads and then Merge Leads
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Merge Leads']").click()
    
    // First popup
    const [newTab1] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator("(//img[@src='/images/fieldlookup.gif']/parent::a)[1]").click()
    ])

    await newTab1.waitForLoadState()
    await newTab1.locator("(//a[@class='linktext'])[1]").click()

    // Second popup 
    const [newTab2] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator("(//img[@src='/images/fieldlookup.gif']/parent::a)[2]").click()
    ])

    await newTab2.waitForLoadState()
    await newTab2.locator("(//a[@class='linktext'])[6]").click()

    // Handle alert 
    page.once('dialog', async dialog => {
        await dialog.accept()
    })

    await page.locator("//a[contains(@class,'buttonDangerous')]").click()

    console.log(await page.title())
})
