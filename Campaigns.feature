    Feature:Add new Campaigns
       Scenario: Verify that the user can add new Campaigns
        Given The user navigated to nopcommerce website
        When the user enter the email
        And the user enter the password
        And click on the login
        And the user click on the sidebar menu
       And The user click on the promotions
       And The user click on the Campaigns
        And the user click on the Add new button
        And the user enter the Campaigns name
        And the user enter the Campaigns subject
        And the user enter the Campaigns body
        And the user click on the save button
        Then The Campaigns should be added successfully