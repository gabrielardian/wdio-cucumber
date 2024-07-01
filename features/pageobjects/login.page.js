import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page{

    open(path){
        return super.open("")
    }
    get textBoxUsername(){
        return $("#user-name")
    }
    get textBoxPassword(){
        return $("#password")
    }
    get buttonLogin(){
        return $("#login-button")
    }
    async login(username,password){
        await this.textBoxUsername.setValue(username);
        await this.textBoxPassword.setValue(password);
        await this.buttonLogin.click()
    }
    async inputusername(username){
        await this.textBoxUsername.setValue(username);
    }
}
export default new LoginPage();
