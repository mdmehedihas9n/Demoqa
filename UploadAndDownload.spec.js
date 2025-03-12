// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('DemoQA Elements Tests', () => {
  
  // 7. Upload and Download Test
  test('Links Box test', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    await page.waitForTimeout(2000); 

     //click element button
     await page.click("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']");
     await page.waitForTimeout(5000);
     //links xpath
     await page.click("//span[normalize-space()='Upload and Download']", { waitUntil: 'domcontentloaded' });
     
    // Download a file by clicking the download button.
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton')
      ]);
      const suggestedFileName = download.suggestedFilename();
      
      // Save the downloaded file in the "downloads" folder.
      await download.saveAs(`./downloads/${suggestedFileName}`);
    
    
     await page.waitForTimeout(5000);

     // Set the file path for the upload test.
    // Ensure that 'tests/testfile.png' exists in your project.
 
    const fileInput = await page.locator("//input[@id='uploadFile']");
    await fileInput.setInputFiles('C:\\Mehedi Hasan\\downloads\\sampleFile.jpeg');

    console.log('File Uploaded Successfully!');
    
    await page.waitForTimeout(5000);

    // Close browser
    //await browser.close();
  });

});
 
  