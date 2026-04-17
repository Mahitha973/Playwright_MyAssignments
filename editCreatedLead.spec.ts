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
    await page.locator('(//input[contains(@class, "inputBox")])[1]').fill("Healthcare")
    await page.locator('(//input[contains(@class, "inputBox")])[3]').fill("Ram")
    await page.locator('(//input[contains(@class, "inputBox")])[4]').fill("P")
    await page.locator('//input[contains(@class,"smallSubmit")]').click()
    //Find Lead
    await page.locator("a:has-text('Find Leads')").click()
    const companyNameField= page.locator('[name="companyName"]').nth(1)
    await companyNameField.fill('Healthcare')
    await page.locator("//button[text()='Find Leads']").click()
    //Click on the first result
    await page.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first().click()
    //Verify the created lead
    await expect (page.locator("#viewLead_companyName_sp")).toContainText("Healthcare")
    await expect (page.locator("#viewLead_firstName_sp")).toContainText("Ram")
    await expect (page.locator("#viewLead_lastName_sp")).toContainText("P")
})
