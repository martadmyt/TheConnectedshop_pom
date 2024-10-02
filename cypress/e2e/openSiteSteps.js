import OpenSite from "../support/pages/openSite";
import { Given } from '@cucumber/cucumber';

const openSite = new OpenSite();

Given('I open the site', () => {
    openSite.visit();
  });

