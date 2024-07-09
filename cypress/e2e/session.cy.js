
import obj_loginPage from "../pages/login"
import obj_addEmployee from "../pages/addEmployee"
import obj_pim from "../pages/PIM"


// randomly generating 5 didit No
var ramdomEmployeeID = Math.floor(Math.random() * 100000)

describe('verify session', () => {

  cy.on("uncaught:exception", () => {
    return false
  })

  beforeEach("session create", () => {
    cy.session("session", () => {
      cy.visit("/")
      cy.xpath(obj_loginPage.usernameXpath()).type(Cypress.env("username"))
      cy.xpath(obj_loginPage.passwordXpath()).type(Cypress.env("password"))
      cy.xpath(obj_loginPage.submitBtnXpath()).click()

    })
  })
  it('add employee details', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
    cy.xpath(obj_addEmployee.firstnameXpath()).type("first nmae")
    cy.xpath(obj_addEmployee.lastnameXpath()).type("last nmae")
    obj_addEmployee.employeeID().clear().type(ramdomEmployeeID)
    // cy.pause()
    cy.xpath(obj_addEmployee.submitBtnXpath()).click()
    cy.contains(obj_addEmployee.successMessage()).should("be.visible")
  })
  it("search created employee by empID", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    obj_pim.empID().clear().type(ramdomEmployeeID)
    cy.wait(5000)
    cy.xpath(obj_pim.submitBtnXpath()).click()
    obj_pim.userDataXpath().then($data => {
      //compare in string formate
      cy.wrap($data.text()).should("eq", ramdomEmployeeID.toString())
      //compare in No formate
      // cy.wrap(Math.floor($data.text())).should("eq", ramdomEmployeeID)
    })
  })
})
