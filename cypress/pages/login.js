class loginPage {

    usernameXpath(){
        return '//input[@name="username"]'
    }
    passwordXpath(){
        return '//input[@name="password"]'
    }
    submitBtnXpath(){
        return '//button[@type="submit"]'
    }
}
const obj_loginPage = new loginPage()
export default obj_loginPage