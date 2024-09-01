
Given("open web page", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("Enter Valid credentials", () => {

    cy.xpath('//input[@name="username"]').type("Admin")
    cy.xpath('//input[@name="password"]').type("admin123")
    cy.xpath('//button[@type="submit"]').click()

})

Then("assert after login success", () => {
   cy.contains("Dashboard").should("be.visible")
       
})

But("message after login", () => {

    cy.log('sample message after login')
})
