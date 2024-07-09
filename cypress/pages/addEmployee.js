class addEmployee{

    firstnameXpath(){
        return '//input[@name="firstName"]'
    }
    lastnameXpath(){
        return '//input[@name="lastName"]'
    }
    employeeID(){
        return cy.get('.oxd-input.oxd-input--active').eq(3)
    }
    submitBtnXpath(){
        return '//button[@type="submit"]'
    }
    successMessage(){
        return "Success"
    }
}
const obj_addEmployee =  new addEmployee()
export default obj_addEmployee