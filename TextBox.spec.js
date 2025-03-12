// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('DemoQA Elements Tests', () => {
  
  // 1. Text Box Test
  test('Text Box test', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    await page.waitForTimeout(2000); 

     //click element button
     await page.click("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']");
     
    // Using 'domcontentloaded' can sometimes help if "load" takes too long.
    await page.click("//div[@class='element-list collapse show']//li[@id='item-0']", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);
    // Fill out the form
    await page.fill('#userName', 'Mehedi Hasan');
    await page.fill('#userEmail', 'mehedi@gmail.com');
    await page.fill('#currentAddress', 'Hazaribugh');
    await page.fill('#permanentAddress', 'Barguna');
    await page.click('#submit');

    // Assertions
    await expect(page.locator('#name')).toContainText('Mehedi Hasan');
    await expect(page.locator('#email')).toContainText('mehedi@gmail.com');
    
    await page.waitForTimeout(5000); 
  });

});
