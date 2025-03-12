// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('DemoQA Elements Tests', () => {
  
  // 1. Text Box Test
  test('Links Box test', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    await page.waitForTimeout(2000); 

     //click element button
     await page.click("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']");
     await page.waitForTimeout(5000);
     //links xpath
     await page.click("//div[@class='element-list collapse show']//li[@id='item-5']");
     
    // Click links that open a new tab
    await page.click("//a[@id='created']");
    //await page.waitForTimeout(5000);
    await page.click("//a[@id='no-content']");
    
    await page.click("//a[@id='moved']");
    
    await page.click("//a[@id='bad-request']");
    
    await page.click("//a[@id='unauthorized']");

    await page.click("//a[@id='forbidden']");

    await page.click("//a[@id='invalid-url']");
    await page.waitForTimeout(5000);

    // Close browser
    //await browser.close();
  });

});
