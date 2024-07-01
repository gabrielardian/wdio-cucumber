@Saucedemo @Dashboard

Feature: Saucedemo Add to cart
    Background:
        Given user is on Saucedemo login page 
        And user input username with "standard_user"
        And user input password with "secret_sauce"
        When user click login button 
       

    @tc-3 @addtocart
    Scenario: add to cart
        Given user is on Saucedemo Dashboard page 
        When user click add button on catalog
        And user click cart icon on top righ
        Then user should redirect to the your cart page

    @tc-4 @addmoretwo
    Scenario: add to cart more two item
        Given user is on Saucedemo Dashboard page 
        When user click add button on catalog two
        And user click add button on catalog three
        When user click cart icon on top righ
        Then user should redirect to the your cart page


   