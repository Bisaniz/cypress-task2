import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import createAccountPageActions from "../../../../pageObject/createAccountPage/actions.cy";
import createAccountPageAssertions from "../../../../pageObject/createAccountPage/assertions.cy";



const firstName="first";
const lastName="last";
const email = "razanUsser"+Math.floor(Math.random()*100)+"@gmail.com"; 

// // float number  Math.random() 0 - 1 0.1 , 0.2345566778 
// // Math.floor(Math.random()*100) // integer numbers 0-99 
const password = "test@123%6";
const confirmPassword = "test@123%6";

const createAccountActions = new createAccountPageActions();
const createAccountAssertions = new createAccountPageAssertions();

Given("The user navigated to create new account page",()=>{
    createAccountActions.openCreateAccountPage()
});


When("The user enter the first name",()=>{
    createAccountActions.typeInFirstNameInputField(firstName)
});

When("The user enter the last name",()=>{
    createAccountActions.typeInLastNameInputField(lastName)
});

When("The user enter the email",()=>{
    createAccountActions.typeInEmailInputField(email)
});

When("The user enter the password",()=>{
    createAccountActions.typeInPasswordInputField(password)
});

When("The user confirm the password",()=>{
    createAccountActions.typeInpasswordConfirmationInputField(confirmPassword)
});

When("The user click on the create account button",()=>{
    createAccountActions.clickOnCreateAccountButton()
});


Then("The account should be created successfully",()=>{
    createAccountAssertions.checkPageTitleContainValue("My Account")
});


// import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// const firstName="Razan";
// const lastName="user";
// const email = "razanUsser"+Math.floor(Math.random()*100)+"@gmail.com"; 

// // float number  Math.random() 0 - 1 0.1 , 0.2345566778 
// // Math.floor(Math.random()*100) // integer numbers 0-99 
// const password = "test@123%6";
// const confirmPassword = "test@123%6";

// Given("The user navigated to create account page",()=>{
  
// });

// When("Type {string} in the field",(fieldName)=>{
//     switch(fieldName){
//         case "firstName":
//             cy.get("#firstname").clear().type(firstName);
//             break;
//         case "lastName":
//             cy.get("#lastname").clear().type(lastName);
//             break; 
//         case "email":
//             cy.get("#email_address").clear().type(email);
//             break;
//         case "password":
//             cy.get("#password").clear().type(password);
//             break; 
//         case "confirmPassword":
//             cy.get("#password-confirmation").clear().type(confirmPassword);
//             break;     
//         }
// })

// When("Clicks on Create an account button",()=>{
//     cy.get(".submit.primary").click();
// });

// Then("The Account should be created successfully",()=>{
//     cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
//     cy.get(".page-title").should("contain","My Account");
// });

// Then("{string} message will be shown",(msg)=>{
//     cy.get("[role=alert]").should("contain",msg)
// });