describe("Verifying API Authentication", () => {

    it("Digest Authentication", () => {

        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password",
            }

        }).then(response => {

            expect(response.status).to.eq(200)
        })
    })
})