// import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// Given("The user navigated to create new account page",()=>{
//     cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
// });


// When("The user enter the first name",()=>{
//     cy.get("#firstname").clear().type("first");
// });

// When("The user enter the last name",()=>{
//     cy.get("#lastname").clear().type("last");
// });

// When("The user enter the email",()=>{
//     cy.get("#email_address").clear().type("1235@gmail.com");
// });

// When("The user enter the password",()=>{
//     cy.get("#password").clear().type("Pass@@123");
// });

// When("The user confirm the password",()=>{
//     cy.get("#password-confirmation").clear().type("Pass@@123");
// });

// When("The user click on the create account button",()=>{
//     cy.get(".submit").click();
// });


// Then("The account should be created successfully",()=>{
//     cy.get(".page-title").should("contain","My Account");
// });


import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const firstName="Razan";
const lastName="user";
const email = "razanUsser55@gmail.com";
const password = "test@123%6";
const confirmPassword = "test@123%6";

Given("The user navigated to create account page",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});

When("Type {string} in the field",(fieldName)=>{
    switch(fieldName){
        case "firstName":
            cy.get("#firstname").clear().type(firstName);
            break;
        case "lastName":
            cy.get("#lastname").clear().type(lastName);
            break; 
        case "email":
            cy.get("#email_address").clear().type(email);
            break;
        case "password":
            cy.get("#password").clear().type(password);
            break; 
        case "confirmPassword":
            cy.get("#password-confirmation").clear().type(confirmPassword);
            break;     
        }
})

When("Clicks on Create an account button",()=>{
    cy.get(".submit.primary").click();
});

Then("The Account should be created successfully",()=>{
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
    cy.get(".page-title").should("contain","My Account");
});

Then("{string} message will be shown",(msg)=>{
    cy.get("[role=alert]").should("contain",msg)
});