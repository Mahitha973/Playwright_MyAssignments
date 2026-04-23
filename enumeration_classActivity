import { chromium,BrowserContext,Browser,Page } from "@playwright/test"

//Different environments to launch
enum Enivronment{
     qaurl="http://www.google.com/qa", 
    stagingurl="htttp://www.google.com/staging", 
    productionurl="htttp://www.google.com/production"
}
    
  //Function to open the browser and launch the url  
    async function runTests(url:Enivronment){ 
        const browser:Browser= await chromium.launch({channel:'chrome'}) 
        const browserContext:BrowserContext=await browser.newContext() 
        const page:Page=await browserContext.newPage() 
        await page.goto(url) 
    } 
        runTests(Enivronment.qaurl) 
        runTests(Enivronment.stagingurl)
        runTests(Enivronment.productionurl)
