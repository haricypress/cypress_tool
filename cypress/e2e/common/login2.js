

When("Enter Valid Username", () =>{

    cy.xpath('//input[@name="username"]').type("Admin")
    
})
And("Enter Valid Password", () =>{

    cy.xpath('//input[@name="password"]').type("admin123")
    
})
And("Click On Submit Button", () =>{

    cy.xpath('//button[@type="submit"]').click()
    
})
