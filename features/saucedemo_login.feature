@Saucedemo @login
Feature: Saucedemo Login

    Background:
        Given user is on Saucedemo login page 
        And user input password with "secret_sauce"

    @tc-1 @standard_user @deprecated @skip
    Scenario: Successfull login
        And user input username with "standard_user"
        When user click login button 
        Then user should redirect to the homepage

    @tc-2 @visual_user
    Scenario: Successfull login dua
        And user input username with "visual_user"
        When user click login button 
        Then user should redirect to the homepage