/// <reference types="cypress" />
describe('task6', () => {
   

    before(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/");

        cy.get("#Email").clear().type('admin@yourstore.com');
        cy.get("#Password").clear().type('admin');
        cy.get(".login-button").click();
        //cy.loginNopcommerce();
        cy.wait(1500);
    })

    // no need for this case i added the steps in beforeEach hook . 
    // it('login using custom command', () => {
    //     cy.visit("https://admin-demo.nopcommerce.com/");
    //     cy.loginNopcommerce()
    // }); 

    it('Verify that the user can add new product', () => {
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();
        cy.contains("Add new").click();
         
        cy.get("#Name").clear().type("Laptop666");
        
        // category field not working you can skip it  
        // cy.get("#SelectedCategoryIds").prev().click().type("Computers{downarrow}"+"{enter}",{force:true})
        
        cy.get("#product-info .card-tools button").click()
        cy.wait(500)
        cy.get("#product-price-area input").last().clear({force:true}).type("4000",{force:true});

        cy.get("#product-info").find(".fa-plus").parent().click();
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain","The new product has been added successfully.")
        cy.get("#SearchProductName").type("Laptop666");
        cy.get("#search-products").click()
        cy.get("#products-grid tbody tr").should("contain","Laptop666").and("contain","4000");
         cy.get('.checkboxGroups').check();
        cy.get('#delete-selected').click();
        cy.get('#delete-selected-action-confirmation-submit-button').click({force:true});
        cy.get("#products-grid tbody tr").should("contain","No data available in table");
      
});
});