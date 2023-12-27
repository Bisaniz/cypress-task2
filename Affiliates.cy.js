import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopcommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/");
});

When("the user enter the email",()=>{
    cy.get("#Email").clear().type('admin@yourstore.com');
});

When("the user enter the password",()=>{
    cy.get("#Password").clear().type('admin');
});

When("click on the login",()=>{
    cy.get(".login-button").click();
});

When("the user click on the sidebar menu",()=>{
    cy.get("#nopSideBarPusher").click();
});

When("The user click on the promotions",()=>{
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
});

When("The user click on the Affiliates",()=>{
    cy.contains("Affiliates").click({force: true});
});

When("the user click on the Add new button",()=>{
    cy.contains("Add new").click();
});

When("the user enter the Affiliates name",()=>{
    cy.get("#Address_FirstName").type('affilate');
});

When("the user click on the save button",()=>{
    cy.get("[name=save]").click();
});

Then("The Affiliates should be added successfully",()=>{
    cy.get(".alert-success").should("contain","The new affiliate has been added successfully.");
});
