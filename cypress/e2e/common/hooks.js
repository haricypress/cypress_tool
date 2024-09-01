beforeEach(() => {
    cy.log("beforeEach2")
})

beforeEach(() => {
    cy.log("beforeEach1")
})

before(() => {
    cy.log("before2")
})

before(() => {
    cy.log("before1")
})

afterEach(() => {
    cy.log("afterEach2")
})
afterEach(() => {
    cy.log("afterEach1")
})

after(() => {
    cy.log("after2")
})

after(() => {
    cy.log("after1")
})
