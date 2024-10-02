import { Then } from '@cucumber/cucumber';

Then('I check the title of the home page', () =>{
    homePage.checkTitleHomePage();
    homePage.checkURLHomePage();
})

