import { $ } from '@wdio/globals'
import Page from "./page.js";


class DashboardPage extends Page{
    open(path){
        return super.open("inventory.html")
    }
    get cartIcon(){
        return $("#shopping_cart_container");
        
    }
    get buttonAdd(){
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get buttonAdd2(){
        return $("#add-to-cart-sauce-labs-bike-light")
    }
    get buttonAdd3(){
        return $("#add-to-cart-sauce-labs-bolt-t-shirt")
    }
    get buttonCart(){
        return $("#shopping_cart_container")
    }
    get buttonRemove(){
        return $("#remove-sauce-labs-backpack");
    }

    async validateOnPage(){
        expect(this.cartIcon).toBeDisplayed();
        expect(this.buttonAdd).toBeDisplayed();
        await this.buttonAdd.click()
        await this.buttonAdd2.click()
        await this.buttonAdd3.click()
        await this.buttonCart.click()
    }
    
}

export default new DashboardPage();