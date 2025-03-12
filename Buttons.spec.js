import { test, expect } from '@playwright/test';
test("Buttons Test", async ({ page }) => {
    //Visit URL
    await page.goto('https://demoqa.com/');
    //Click on Elements
    await page.click('(//div)[12]');
    //Click on Buttons
    await page.click('#item-4');
    //Wait 2 seconds
    await page.waitForTimeout(2000);
    //Double Click
    await page.dblclick('#doubleClickBtn');
    //Wait 2 seconds
    await page.waitForTimeout(2000);
    //Right Click
    await page.locator('#rightClickBtn').click({button: "right"});
    //Wait 2 seconds
    await page.waitForTimeout(2000);
    //Click
    await page.click('"Click Me"');
     //Wait 2 seconds
     await page.waitForTimeout(2000);
});