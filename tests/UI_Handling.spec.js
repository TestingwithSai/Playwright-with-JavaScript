const {test, expect} = require("@playwright/test")

test("Dropdown and Radio button selection", async({page}) => {
    
   const username = page.locator("input#username");
   const password = page.locator("[name='password']");
   const dropDownBtn = page.locator('select.form-control');
   const radioBtn = page.locator("span.radiotextsty").last();
   const signinButton = page.locator('input#signInBtn');
   const documentLink = page.locator("[href*='documents-request']");

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   
   await username.fill('rahulshettyacademy');
   await password.fill('Learning@830$3mK2');
   await dropDownBtn.selectOption("consult");

   // Radio Button
   await radioBtn.click();
   await page.locator('button#okayBtn').click();
   await expect(radioBtn).toBeChecked();

   // Check Box
   await page.locator('#terms').click();
   await expect(page.locator("#terms")).toBeChecked();

   await expect(documentLink).toHaveAttribute('class', 'blinkingText');

   await signinButton.click();
});



test.only("Child window", async({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
const documentLink = page.locator("[href*='documents-request']");


await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const [newPage] = await Promise.all ([
   context.waitForEvent('page'),
   documentLink.click(),
])

let text = await newPage.locator(".red").first().textContent();
console.log(text);

const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0];
console.log(domain);

await page.locator("input#username").fill(domain);
console.log(await page.locator("input#username").textContent());
//await page.pause();

})