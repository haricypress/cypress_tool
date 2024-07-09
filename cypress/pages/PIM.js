class pim{

    empID(){
        return cy.get('.oxd-input.oxd-input--active').last()
    }
 
    submitBtnXpath(){
        return '//button[@type="submit"]'
    }
    userDataXpath(){
        return cy.xpath('//div[@data-v-6c07a142]').first()
    }
}
const obj_pim =  new pim()
export default obj_pim