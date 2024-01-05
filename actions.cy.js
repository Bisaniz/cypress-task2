class addToCartPageActions{
    // methods needed in createAccount page 

    openMagentoWebsite(){
        cy.visit("https://magento.softwaretestingboard.com");
        return this;
    }
    
    typeInSearchInputField(productName){
        cy.get("#search").clear().type(productName);
        return this;
    }

    clickOnSearchButton(){
        cy.get(".actions button").click();
        return this;
    }

    chooseTheProductName(){
        cy.get(".product-items li").first().click();
        return this;
    }

    ChooseTheProductSize(){
        cy.get(".swatch-attribute.size").contains("M").click();
        return this;
    }

    ChooseTheProductColor(){
        cy.get(".swatch-attribute.color").find(".swatch-option").last().click();
        return this;
    }

    clickOnAddToCartButton(){
        cy.get("#product-addtocart-button").click();
        return this;
    }

}

export default addToCartPageActions;