Feature: I want to filter Tablet Accessories from the landing page

  Background: Navigate to the Website
    Given I navigate to the Amazon landing page

  Scenario: Filter Products by Newest Arrival
    When I Click on the hamburger icon on the top left
    And  Click on the Computer's link item
    And  Click on the Tablet Accessories's link item
    And  Check The JETech checkbox
    And  Click on the Newest Arrivals option
    And Click on the Lowest Priced item
    And Switch Window
    Then 'About this Item' section should be present on the page
