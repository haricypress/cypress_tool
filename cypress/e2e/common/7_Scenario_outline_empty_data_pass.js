import { Given, When } from "cypress-cucumber-preprocessor/steps"

Given("display first name as {string}, second name as {string}", (user_Data, test_data) => {
    cy.log(user_Data, test_data)
})
When("display userdata {string}", (file) => {
    cy.log(file)
})