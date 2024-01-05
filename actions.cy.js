class createAccountPageActions{
    // methods needed in createAccount page 

    openCreateAccountPage(){
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        return this;
    }
    
    typeInFirstNameInputField(firstName){
        cy.get("#firstname").clear().type(firstName);
        return this;
    }

    typeInLastNameInputField(lastName){
        cy.get("#lastname").clear().type(lastName);
        return this;
    }

    typeInEmailInputField(email){
        cy.get("#email_address").clear().type(email);
        return this;
    }

    typeInPasswordInputField(password){
        cy.get("#password").clear().type(password);
        return this;
    }

    typeInpasswordConfirmationInputField(confirmPassword){
        cy.get("#password-confirmation").clear().type(confirmPassword);
        return this;
    }

    clickOnCreateAccountButton(){
        cy.get(".submit").click();
        return this;
    }

}

export default createAccountPageActions;