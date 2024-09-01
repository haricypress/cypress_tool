
Feature: verifying login orangeHRM
    verifying  login orangeHRM


Scenario: verifying login with valid details

    Given user launch application
    When user enter username as "Admin"
    And user enter password as "admin123"
    And user click on login button
    Then user should navigate to dashboard page
