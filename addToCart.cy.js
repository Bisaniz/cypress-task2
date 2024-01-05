import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import addToCartPageActions from "../../../../pageObject/addToCartPage/actions.cy";
import addToCartPageAssertions from "../../../../pageObject/addToCartPage/assertions.cy";

const productName="shirt";

const addToCartActions = new addToCartPageActions();
const addToCartassertions = new addToCartPageAssertions();

Given("The user navigated to magento website",()=>{
    addToCartActions.openMagentoWebsite()
  });

When("The user search for product",()=>{
    addToCartActions.typeInSearchInputField(productName)
});

When("The user click on search button",()=>{
    addToCartActions.clickOnSearchButton()
});

When("The user choose the product X",()=>{
    addToCartActions.chooseTheProductName()
});

When("The user choose the size for product",()=>{
    addToCartActions.ChooseTheProductSize()
});

When("The user choose the color for product",()=>{
    addToCartActions.ChooseTheProductColor()
  });

When("The user click on Add to cart button",()=>{
    addToCartActions.clickOnAddToCartButton()
});

Then("The product should be added to the cart successfully",()=>{
    addToCartassertions.checkTheDisplayedMessage("You added Radiant Tee to your shopping cart.")
});






















// beforeEach(()=>{
//     // بعرف ال before  و ال after  زيها زي ال given 
//     // executed before Background in feature file .
//    // will executed before-each test case   لانه ما في before all in cucumber
//    // قبل كل التيست كيسز رح يعملها

//     cy.log("Hi from before each");
// });

// Before({tags:"@TC-1 or @TC-3"},()=>{
//     // before-each test case in case we didn't use tags  هون االاشي الاضافي عليها انه بحط تاجز
//     // before-each specific test case according to the tag(s) used  
//       or تستخدم لتنفيذ "كود معين قبل تيست كيس معينة فقط" 2 سيناريو مختلفات عليهم تاجز مختلفة
//     cy.log("Hi Form Before") قبل 1 و 3 رح ينفذها
// });

// Before({tags:"@smoke and @TC-1234"},()=>{        // tags:""
//     // before-each test case in case we didn't use tags 
//     // before-each specific test case according to the tag(s) used  
//     // and تستخدم لتنفيذ نفس اليسناريو اللي عليه 2 تاجز مرة وحدة
//     cy.log("Hi Form Before")
// });

// Given("The user navigated to magento website",()=>{
//     cy.visit("/");
// });

// Then("The logo should be visible",()=>{
//     cy.get(".logo").should("be.visible");
// });

// Given("The user navigated to magento website",()=>{
//       cy.visit("/");
//     });

// And("The user search for shirt {word}",()=>{
//     cy.get("#search").type("shirt {enter}");
// });

// When("The user choose the product X",()=>{
//     cy.get(".product-items li").first().click();
// });

// When("The user choose the size and color for product {float}",(number)=>{
//     cy.wait(1500);
//     cy.log(number);
//     cy.get(".swatch-attribute.size").contains("M").click();
//     cy.get(".swatch-attribute.color").find(".swatch-option").last().click();
// });

// When("The user choose the size {string} and color {string} for product X",(size,colorIndex)=>{
//     cy.wait(1500);
//     cy.get(".swatch-attribute.size").contains(size).click();
//     cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();
// });

// When("The user click on Add to cart button",()=>{
//     cy.get("#product-addtocart-button").click();
// });

// Then("The product should be added to the cart successfully with {string}",(message)=>{
//     cy.wait(1000)
//     cy.get("[role=alert]").should("contain",message)
// });

// Then("The counter of the cart should be visible",()=>{
//     cy.get(".counter-number").should("be.visible")
// });