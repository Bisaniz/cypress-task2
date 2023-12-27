
Feature: Add new discount

    Scenario: Verify that the user can add new discount
        Given The user navigated to nopcommerce website
        When the user enter the email
        And the user enter the password
        And click on the login
        And the user click on the sidebar menu
       And The user click on the promotions
       And The user click on the discount
        And the user click on the Add new button
        And the user enter the discount name
        And the user click on the save button
        Then The discount should be added successfully
      

    #     Scenario: Verify that the user can add new Affiliates
    #     Given The user navigated to nopcommerce website
    #     When the user enter the email
    #     And the user enter the password
    #     And click on the login
    #     And the user click on the sidebar menu
    #    And The user click on the promotions
    #    And The user click on the Affiliates
    #     And the user click on the Add new button
    #     And the user enter the Affiliates name
    #     And the user click on the save button
    #     Then The Affiliates should be added successfully


    #     Scenario: Verify that the user can add new Campaigns
    #     Given The user navigated to nopcommerce website
    #     When the user enter the email
    #     And the user enter the password
    #     And click on the login
    #     And the user click on the sidebar menu
    #    And The user click on the promotions
    #    And The user click on the Campaigns
    #     And the user click on the Add new button
    #     And the user enter the Campaigns name
    #     And the user click on the save button
    #     Then The Campaigns should be added successfully
