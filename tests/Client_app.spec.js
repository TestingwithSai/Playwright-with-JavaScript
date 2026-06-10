const {test, expect} = require("@playwright/test");
const { log } = require("console");

test("Client Login", async ({ page }) => {
  const userEmail = page.locator("input#userEmail");
  const userPass = page.locator("input#userPassword");
  const loginbtn = page.locator("[value='Login']");
  const cardTitles = page.locator("//div[@class='card-body']//child::b");

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await userEmail.fill("sainathvairagi7899@gmail.com");
  await userPass.fill("Kulli@7899");
  await loginbtn.click();
  //await page.waitForLoadState("networkidle");
  await page.locator("//div[@class='card-body']//child::b").first().waitFor();
  console.log(await cardTitles.allTextContents());


  
  

});