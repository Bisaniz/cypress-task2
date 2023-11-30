/// <reference types="cypress" />

describe('task5', () => {

    it('visible', () => {
        cy.visit("/"); 
         cy.contains('a','Create an Account').click();
         cy.wait(3000);
        cy.get("#firstname").should("be.visible");
        cy.get("#firstname").should("be.empty");
        cy.get("#lastname").should("be.visible"); 
        cy.get("#lastname").should("be.empty");  
        cy.get("#email_address").should("be.visible");
        cy.get("#email_address").should("be.empty");
        cy.get("#password").should("be.visible");
        cy.get("#password").should("be.empty");
        cy.get("#password-confirmation").should("be.visible");
        cy.get("#password-confirmation").should("be.empty");
        cy.contains('span','Create an Account').should('be.visible');
    });

        it('create account',()=> {
            cy.visit("/"); 
            cy.contains('a','Create an Account').click();
            cy.wait(3000);
            cy.get("#firstname").type("bisan");
            cy.get("#lastname").type('iz');
            cy.get("#email_address").type('bisandawabsheh@gmail.com');
            cy.get("#password").type('Pass@123456789');
            cy.get("#password-confirmation").type('Pass@123456789');
            cy.contains('span','Create an Account').click();

    });
});