Feature:Add new Affiliates

Scenario: Verify that the user can add new Affiliates
   Given The user navigated to nopcommerce website
  When the user enter the email
  And the user enter the password
  And click on the login
 And the user click on the sidebar menu
 And The user click on the promotions
  And The user click on the Affiliates
 And the user click on the Add new button
And the user enter the Affiliates name
And the user click on the save button
Then The Affiliates should be added successfully