Feature: Login Page Tests
Description: Test if the login page works correctly.

  @smoke
  Scenario: Check if login page is accessible
    Given the user navigates to the login page
    Then the user should see a login heading
    And the user should see a login switch button
    And the user should see a signup switch button
