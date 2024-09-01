Feature: verifying orangeHRM
    verifying orangeHRM

Scenario: verifying add employee

Given user launch application
When user enter usernam as "Admin"
When user enter password as "admin123"
And user click on login button
When user should navigate to dashboard page
And user click on PIM menu
And user click on add employee
And user enter firstname as "hari"
And user enter lastname as "kishore"
And user click on save button
Then user should get successfull message



Scenario: verifying add employee mandatory details

Given user launch application
When user enter usernam as "Admin"
When user enter password as "admin123"
And user click on login button
Then user should navigate to dashboard page
When user click on PIM menu
And user click on add employee
And user click on save button
Then user should get required message