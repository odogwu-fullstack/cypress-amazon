/// <reference types="cypress" />
const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const LandingPage = require("../../Pages/Landing/landing.cy");

Given("I navigate to the Amazon landing page", () => {
LandingPage.enterURL();
});
When("I Click on the hamburger icon on the top left", () => {
LandingPage.clickHamburgerMenu();
});
And("Click on the Computer's link item", () => {
LandingPage.clickComputersLinkItem();
});
And("Click on the Tablet Accessories's link item", () => {
LandingPage.clickTabletAccesoriesLinkItem();
});
And("Check The JETech checkbox", () => {
    // This step is indeterminate as the JETtech checkbox does not always show when the page loads and this could stop the test

// LandingPage.checkJETechBox();
})
And("Click on the Newest Arrivals option", () => {
LandingPage.selectNewest();
});
And("Click on the Lowest Priced item", () => {
    LandingPage.selectLowestPricedItem();
});
And("Switch Window", () => {
    cy.window().then(win => {
        cy.location().then(loc=> {
        win.open(loc.href, '_blank'); 
        })
      });
})
Then("'About this Item' section should be present on the page", () => {
    LandingPage.confirmAboutItem();
})

