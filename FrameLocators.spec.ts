import { test, expect } from '@playwright/test';

test('Handle confirm box inside iframe', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // Switch to iframe (adjust locator as needed)
  const frame = page.frameLocator('(//iframe)[1]');

  // Handle dialog (OK case)
  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept(); 
  });

  // Click "Try it" button
  await frame.locator('button:has-text("Try it")').click();

  // Verify result text after clicking OK
  await expect(frame.locator("//p[text() = 'You pressed OK!']")).toHaveText('You pressed OK!');
});
