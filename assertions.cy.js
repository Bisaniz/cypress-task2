class addToCartPageAssertions {
    // methods needed for assertions in createAccount page 
  
    checkTheDisplayedMessage(message){
        cy.get("[role=alert]").should("contain", message);
          return this;
      }
  }
  
  export default addToCartPageAssertions;