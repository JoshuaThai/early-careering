Feature: About Page
Description: Contain smoke and regression tests that check if about us page is stable and 
working as intended.

  @smoke
  Scenario: Check if About Page Loads
    Given the user is on the About page
    Then the user verifies that the About page is fully loaded with the hero section

  @regression
  Scenario: Verify if About Page Loads All Information
    Given the user is on the About page
    Then the user verifies that the text fully loaded
    And the user verifies that the image fully loaded

  @regression
  Scenario: Verify if Call to Action in About Page works
    Given the user is on the About page
    Then the user verifies that the Call to Action in About page redirects to login page

  @regression
  Scenario: Verify if About Page link in header works
    Given the user is on the homepage
    When the user clicks on "About" link in header
    Then the user verifies that they are on the About Page

  @regression
  Scenario: Verify if About Page link in footer works
    Given the user is on the homepage
    When the user clicks on "About" link in footer
    Then the user verifies that they are on the About Page
