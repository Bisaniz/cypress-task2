class createAccountPageAssertions {
    // methods needed for assertions in createAccount page 
  
    checkPageTitleContainValue(value){
        cy.get(".page-title").should("contain", value);
          return this;
      }
  }
  
  export default createAccountPageAssertions;