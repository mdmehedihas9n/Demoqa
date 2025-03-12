// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('DemoQA Elements Tests', () => {
  
  // 3. Text Box Test
  test('Radio Button Box test', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    await page.waitForTimeout(2000); 
    //click element button
    await page.click("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']");
    
    await page.click("//div[@class='element-list collapse show']//li[@id='item-2']", { waitUntil: 'domcontentloaded' });
    
    // Click on "Yes" radio button
    await page.click('label[for="yesRadio"]');
    
    // Assert the text confirmation
    await expect(page.locator('.text-success')).toHaveText('Yes');

    //await page.waitForTimeout(5000); 
  });

});

