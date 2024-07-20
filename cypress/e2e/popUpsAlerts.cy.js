describe("", () => {
    // cy.on("uncaught:exception", () =>{
    //     return false
    // })

    beforeEach("visit URL", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    it("alert", () => {


        // alert

        cy.contains("Click for JS Alert").click()
        cy.on("window:alert", () => {
            return true
        })
        cy.contains("You successfully clicked an alert").should("be.visible")
    })

    it("confirm - ok", () => {
        // confirm - ok
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", () => {
            return true
        })
        cy.contains("You clicked: Ok").should("be.visible")

    })

    it("confirm - cancel", () => {
        // confirm - cancel
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", () => {
            return false
        })
        cy.contains("You clicked: Cancel").should("be.visible")

    })

    it("prompt - ok", () => {

        cy.window().then($win => {
            cy.stub($win, 'prompt').returns("this is alert box")
            cy.contains("Click for JS Prompt").click()
        })

        cy.contains("You entered: this is alert box").should("be.visible")

    })

    it("prompt - cancel", () => {

        cy.window().then($win => {
            cy.stub($win, 'prompt').callsFake(() => null)
            cy.contains("Click for JS Prompt").click()
        })

        cy.contains("You entered: null").should("be.visible")

    })
})