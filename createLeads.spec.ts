import test, { expect } from "@playwright/test";

test("createLead", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Login to application
    await page.locator("#username").fill("demosalesmanager")
    await page.locator('//form//input[@id="password"]').fill("crmsfa")
    //child to parent
    await page.locator("//input[contains(@class,'decorativeSubmit')]/parent::p").click()
    await page.locator(".crmsfa").click()
    //Create Lead
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('(//input[contains(@class, "inputBox")])[1]').fill("DH")
    await page.locator('(//input[contains(@class, "inputBox")])[3]').fill("Firstname")
    await page.locator('(//input[contains(@class, "inputBox")])[4]').fill("lastname")
    await page.locator('//input[contains(@class,"smallSubmit")]').click()
    //Verify the created lead
    await expect (page.locator("#viewLead_companyName_sp")).toContainText("DH")
    await expect (page.locator("#viewLead_firstName_sp")).toContainText("Firstname")
    await expect (page.locator("#viewLead_lastName_sp")).toContainText("lastname")
})
