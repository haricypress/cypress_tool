
Feature: verifying @focus

    Feature Description

    Background: opening web page

        Given open web page

    Scenario: verifying login with valid credentials

        When Enter Valid credentials
        Then assert after login success
@focus
    Scenario: verifying login with valid credentials using And keyword

        When Enter Valid Username
        And Enter Valid Password
        And Click On Submit Button
        Then assert after login success