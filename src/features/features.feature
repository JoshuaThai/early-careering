Feature: Features Page Tests
Description: Contains smoke and regression tests for Features Page

  @smoke
  Scenario: Check if Features Page Loads
    Given the user is on the Features page
    When the Features page loads
    Then the user verifies that the Features page is fully loaded with the main title
    And the user should see all of the Features page heading

  @regression
  Scenario: Verify if Features Page Loads All Information
    Given the user is on the Features page
    When the Features page loads
    Then the user verifies that the EarlyCareering's Facts is fully loaded
    And the user verifies that the Other App's Facts is fully loaded

  @regression
  Scenario: Verify if Call to Action in Features Page works
    Given the user is on the Features page
    When the Features page loads
    Then the user verifies that the Call to Action in Features page redirects to login page
