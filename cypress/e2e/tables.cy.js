
describe('Automation - Working With Tables in webpage', function () {

    beforeEach("open web page", () => {

        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')

    })// =================================================================================

    it('1. table - basic operations', function () {

        //How many rows 
        cy.xpath('//table[@class="dataTable"]/tbody/tr').should('have.length', '30');

        //How many column 
        cy.xpath('//table[@class="dataTable"]/thead/tr/th').should('have.length', '6');

    })// =================================================================================

    it('2. table - Get row data and Validate column text', function () {

        // if values are fixed in table we should go this scenario

        cy.xpath('//table[@class="dataTable"]/tbody/tr[7]').within(() => {

            cy.get('td').eq(3).then((variable_ele) => {

                cy.log(variable_ele.text())

                expect(variable_ele.text()).to.equal("1534.15") // this share value. changing every time
            })

            cy.get('td').eq(0).should('contain.text', 'HDFC Bank Ltd.')  // company name changing every time based on share value

        })
    })// ===============================================================================

    it.only('3. table - Validate value based on another Value', function () {

        // if values are changing in table dynamically we should go this scenario


        // cy.visit('cypress/htmlFiles/table.html')
        cy.visit('https://testautomationpractice.blogspot.com/')
        

        // using each()  -  iterative
        cy.xpath('//table[@name="BookTable"]').each((details) => {
            // cy.log(details.text())


            cy.get(details).contains('Amod').parent().then(elem => {
                cy.get(elem).within(() => {

                    cy.get('td').eq(0).then((ele) => {

                        cy.log(ele.text())
                    })
                })
            })
        })











    })// =================================================================================

    it('4. table - Validate value based on another Value', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('.dataTable >tbody').contains('Wipro').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev price: " + ele.text())
            })
        })
    })// =================================================================================

    it('5. search data within table', function () {

        // every time, maybe this company not available on top 30
        // checking specific value
        cy.xpath('//table[@class="dataTable"]/tbody').contains(3215.40).should("be.visible")
        cy.xpath('//table[@class="dataTable"]/thead').contains('Company').should("be.visible")
    })// =================================================================================

})