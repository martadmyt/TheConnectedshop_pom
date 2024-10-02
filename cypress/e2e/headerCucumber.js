import Header from "../support/pages/header";
import { And } from '@cucumber/cucumber';

const header = new Header();

And('I check the header elements', () =>{
     header.checkHeaderExisted();
     header.checkLogoTransparent();
     header.checkLogoPrimary();
     header.checkLogoUrl();
     header.checkMenu();
     header.checkMenuItems();
     header.checkAccountSearchCart();
})