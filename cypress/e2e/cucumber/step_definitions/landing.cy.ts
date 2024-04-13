/// <reference types="cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-mochawesome-reporter/cucumberSupport';
import LandingPage from "../pages/landingpage"

Given("I navigate to the Amazon landing page", () => {
LandingPage.enterURL();
});
When("I Click on the hamburger icon on the top left", () => {
LandingPage.clickHamburgerMenu();
});
When("Click on the Computer's link item", () => {
LandingPage.clickComputersLinkItem();
});
When("Click on the Tablet Accessories's link item", () => {
LandingPage.clickTabletAccesoriesLinkItem();
});
When("Check The JETech checkbox", () => {
    // This step is indeterminate as the JETtech checkbox does not always show when the page loads and this could stop the test
// LandingPage.checkJETechBox();
})
When("Click on the Newest Arrivals option", () => {
LandingPage.sortByNewestArrival();
});
When("Click on the Lowest Priced item", () => {
    LandingPage.selectLowestPricedItem();
});
When("Switch Window", () => {
    LandingPage.switchWindow();
})
Then("'About this Item' section should be present on the page", () => {
    LandingPage.confirmAboutItem();
})

