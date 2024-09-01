describe("Verifying API Authentication", function () {

    it("1. Basic Authentication", function () {


        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                user: "postman",
                pass: "passwokrd"
            }

        }).then(response => {

            expect(response.status).to.eq(200)
        })
    })


})