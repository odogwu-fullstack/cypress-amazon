/// <reference types="cypress" />
const {Given, When, Then, And} =require("cypress-cucumber-preprocessor/steps")
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
// LandingPage.checkJETechBox();
})
And("Click on the Newest Arrivals option", () => {
LandingPage.selectNewest();
});
And("Click on the Lowest Priced item", () => {
    LandingPage.selectLowestPricedItem();
});
And("Switch Window", () => {

})
Then("'About this Item' section should be present on the page", () => {
    cy.get("h3.a-size-base-plus.a-text-bold").contains("About this item").should("be.visible")
    .then($element => {
        cy.wrap($element).next('ul').each($elem => {
           console.log(cy.wrap($elem).find("span.a-list-item").text());
        })
    })
})

