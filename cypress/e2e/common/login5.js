
When("Enter Valid Username {string}", (username) =>{

    cy.xpath('//input[@name="username"]').type(username)
    
})
And("Enter Valid Password {string}", (password) =>{

    cy.xpath('//input[@name="password"]').type(password)
    
})



Then("assert after login valid or invalid credentials", () => {
    cy.url().then((url) => {
        cy.log(url)

        if (url == 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            cy.contains("Dashboard").should("be.visible")
        else
            cy.contains('Invalid credentials').should("be.visible")
    })

})
