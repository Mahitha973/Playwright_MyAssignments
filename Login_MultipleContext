import test, { chromium, firefox } from "@playwright/test";


test ('Launch Edge Browser', async() =>{

        const browser= await chromium.launch({headless:false,channel:'msedge'})
        const browserContext= await browser.newContext()
        const page= await browserContext.newPage()
        await page.goto("http://www.redbus.in")
        const pageTitle= await page.title()
        console.log("The title of the page is: ", pageTitle)
    })


    test ('Launch Firefox Browser', async() =>{

        const browser= await firefox.launch({headless:false})
        const browserContext= await browser.newContext()
        const page= await browserContext.newPage()
        await page.goto("http://www.flipkart.com")
        const pageTitle= await page.title()
        console.log("The title of the page is: ", pageTitle)
    })
