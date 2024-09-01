
Feature: verifying @focus

    Feature Description

    Background: opening web page

        Given open web page

    Scenario: verifying login with valid credentials

        When Enter Valid credentials
        Then assert after login success
@focus
    Scenario Outline: verifying login with valid credentials using And keyword

        When Enter Valid Username "<username>"
        And Enter Valid Password "<password>"
        And Click On Submit Button
        Then assert after login valid or invalid credentials
        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | kishore  |
            | hari     | admin123 |
            |  hari    | kishore  |

