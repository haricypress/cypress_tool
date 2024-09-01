import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

import objLoginPage from "../../pageObjectModels/loginPage.po"
import objDashBoardPage from "../../pageObjectModels/dashBoard.po"

Given("user launch application", () => {

    // cy.visit("/")
    cy.visit(objLoginPage.orangeHrmUrl())
})

 

When("user enter username as {string}", (username) => {
    
    objLoginPage.userName().type(username)
    
})


When("user enter password as {string}",(password) =>{

    objLoginPage.password().type(password)

})

And("user click on login button", () => {

    cy.get(objLoginPage.button())

})

Then("user should navigate to dashboard page", () =>{
    
    //verifying in diff ways, in realtime, one verification enough

    // verifying exact web site address 
    // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // or
    // verifying partial web address
    cy.url().should('include',"web/index.php/dashboard/index")
    // or
    // verifying "Dashboard" text available or not
    // cy.contains(objDashBoardPage.displayDashBoardText()).should("be.visible")

})

