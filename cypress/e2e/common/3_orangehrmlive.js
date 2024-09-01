import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit orangehrmlive", () => {

    cy.visit("/")

})

Then("orangeHRM verification for successfull", () => {

  cy.contains("Username : Admin").should("be.visible")
})

/*
===========================================================================

file   :  3_orangehrmlive.feature


Feature: orangehrmlive                         // this line like test suite ( describe() )

  verifying orangehrmlive visit                // like description of test suite
  Scenario: visiting the frontpage             // this like like testcase scenario ( it() )
  Given visit orangehrmlive                  // like function
  Then orangeHRM verification for successfull  //  like function

    */