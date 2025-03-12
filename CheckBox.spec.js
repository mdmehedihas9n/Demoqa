import {test,expect} from '@playwright/test';

test ('Login Locators', async ({page})=>{
    await page.goto('https://demoqa.com/');

    //await page.waitForTimeout(5000); 


    //click element button
    await page.click("//*[name()='path' and contains(@d,'M16 132h41')]");
    //click checkbox button
    await page.click("//span[normalize-space()='Check Box']");

    //click checkmark button
    await page.click("//span[@class='rct-checkbox']//*[name()='svg']");


    console.log("Test Finished");
 await page.waitForTimeout(3000); 

})
