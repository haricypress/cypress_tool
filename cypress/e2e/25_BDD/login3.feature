
Feature: verifying login

    Feature Description

    Scenario: verifying login with valid credentials

        Given open web page
        When Enter Valid credentials
        Then assert after login success

    Scenario: verifying login with valid credentials using And keyword

        Given open web page
        When Enter Valid Username
        And Enter Valid Password
        And Click On Submit Button
        Then assert after login success