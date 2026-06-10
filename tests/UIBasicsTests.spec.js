const {test, expect} = require("@playwright/test")

test('Login page', async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   let username = page.locator("input#username")
   let password = page.locator("[name='password']")
   let signinButton = page.locator('input#signInBtn')
   let cardTitles = page.locator(".card-title a")
   
   // Title of the page
   console.log(await page.title());

   
   await username.fill('rahulshetty');
   await password.fill('Learning@830$3mK2');
   await signinButton.click();
   console.log(await page.locator("[style='display: block;']").textContent());
   await expect(page.locator("[style='display: block;']")).toContainText("Incorrect username/password.");


  await username.fill("");
  await username.fill('rahulshettyacademy');
  await password.fill("");
  await password.fill('Learning@830$3mK2');
  await signinButton.click();

  //console.log(await cardTitles.textContent());
  
  console.log(await cardTitles.nth(1).textContent());
  console.log(await cardTitles.first().textContent());

  //  Getting all texts from the locator
  console.log(await cardTitles.allTextContents());
   
});




// test('google page', async ({page}) => {
// //    const context = await browser.newContext();
// //    const page = await context.newPage();
//       await page.goto('https://www.google.com/');
//       console.log("the title is "+await page.title());

// });