Feature: Signup Page Tests
Description: Test if the signup page works correctly.

  @smoke
  Scenario: Check if signup section is accessible
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user should see a sign up heading
    And the user should see all required fields

  @smoke
  Scenario: Check if terms and conditions is accessible
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user should see a terms and conditions link that they click
    And the user should see the terms and conditions page
