/// <reference types="cypress" />
it("task4",()=>{
    cy.visit("https://magento.softwaretestingboard.com");
cy.get('#search').type('shirt {enter}');
cy.get('.products-grid li:first-child').click();
cy.wait(3000);
cy.get('[option-label="M"]').click();
cy.get('[option-label="Purple"]').click();
cy.get('#qty').clear().type('3');
cy.wait(3000);
cy.get('#product-addtocart-button').click();
cy.wait(3000);

})