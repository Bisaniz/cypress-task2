Feature: Create new account in magento website

    The user should be able to Create new account in magento website

    # Scenario: Verify that the user can Create new account in magento website
    #     Given The user navigated to create new account page
    #     When The user enter the first name
    #     And The user enter the last name
    #     And The user enter the email
    #     And The user enter the password
    #     And The user confirm the password
    #     And The user click on the create account button
    #     Then The account should be created successfully
        
        @focus
        Scenario: Verify the user can create account successfully
        Given The user navigated to create account page // نفس الستيب مع تغيير الفيلد 
        When  Type "firstName" in the field
        And   Type "lastName" in the field
        And   Type "email" in the field
        And   Type "password" in the field
        And   Type "confirmPassword" in the field
        And   Clicks on Create an account button
        Then The Account should be created successfully
        And "Thank you for registering with Main Website Store." message will be shown