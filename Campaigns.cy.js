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

When("The user click on the Campaigns",()=>{
    cy.contains("Campaigns").click({force: true});
});

When("the user click on the Add new button",()=>{
    cy.contains("Add new").click();
});

When("the user enter the Campaigns name",()=>{
    cy.get("#Name").type('Campaigns');
});

When("the user enter the Campaigns subject",()=>{
    cy.get("#Subject").type('subject');
});

When("the user enter the Campaigns body",()=>{
    cy.get("#Body").type('body');
});

When("the user click on the save button",()=>{
    cy.get("[name=save]").click();
});

Then("The Campaigns should be added successfully",()=>{
    cy.get(".alert-success").should("contain","The new campaign has been added successfully.");
});
