import { $ } from '@wdio/globals'
import Page from "./page.js";




class CartPage extends Page{
    Open(path){
        return super.open("cart.html")
    }
    get buttonRemove(){
        return $("#remove-sauce-labs-backpack");
    }
    get buttonCheckout(){
        return $("#checkout")
    }
    async validateOnPage(){
        expect(this.buttonRemove).toBeDisplayed()
        expect(this.buttonCheckout).toBeDisplayed()
        await this.buttonCheckout.click()
        browser.pause(5000)
    }
}
export default new CartPage();