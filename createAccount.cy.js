import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import createAccountPageActions from "../../../../pageObject/createAccountPage/actions.cy";
import createAccountPageAssertions from "../../../../pageObject/createAccountPage/assertions.cy";



const firstName="first";
const lastName="last";
const email = "email"+Math.floor(Math.random()*100)+"@gmail.com"; 

// // float number  Math.random() 0 - 1 0.1 , 0.2345566778 
// // Math.floor(Math.random()*100) // integer numbers 0-99 
const password = "test@123%6";
const confirmPassword = "test@123%6";

const createAccountActions = new createAccountPageActions();
const createAccountAssertions = new createAccountPageAssertions();

Given("The user navigated to create new account page",()=>{
    createAccountActions.openCreateAccountPage()
});


When("The user enter the first name",()=>{
    createAccountActions.typeInFirstNameInputField(firstName)
});

When("The user enter the last name",()=>{
    createAccountActions.typeInLastNameInputField(lastName)
});

When("The user enter the email",()=>{
    createAccountActions.typeInEmailInputField(email)
});

When("The user enter the password",()=>{
    createAccountActions.typeInPasswordInputField(password)
});

When("The user confirm the password",()=>{
    createAccountActions.typeInpasswordConfirmationInputField(confirmPassword)
});

When("The user click on the create account button",()=>{
    createAccountActions.clickOnCreateAccountButton()
});


Then("The account should be created successfully",()=>{
    createAccountAssertions.checkPageTitleContainValue("My Account")
});

