Feature: Signup Page Tests
Description: Test if the signup page works correctly.

  @smoke
  Scenario: Check if login page is accessible
    Given the user navigates to the login page
    Then the user should see a login heading
    And the user should see a login switch button
    And the user should see a signup switch button

  @smoke
  Scenario: Check if login page is accessible
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user should see a sign up heading
    And the user should see all required fields
