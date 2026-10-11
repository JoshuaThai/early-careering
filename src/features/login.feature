Feature: Login Page Tests
Description: Test if the login page works correctly.

  @smoke
  Scenario: Check if login page is accessible
    Given the user navigates to the login page
    Then the user should see a login heading
    And the user should see a login switch button
    And the user should see a signup switch button

  @smoke
  Scenario: Verify that the user can access all fields in Login page
    Given the user navigates to the login page
    Then the user verifies that they can see all login fields

  @regression
  Scenario: Verify that users cannot login with only email field completed
    Given the user navigates to the login page
    Then the user enters "test@email.com" into "email" field in login page
    And the user clicks the "login" button
    And the user should be on the "login" page

  @regression
  Scenario: Verify that users cannot login with only password field completed
    Given the user navigates to the login page
    Then the user enters "123456789!!" into "password" field in login page
    And the user clicks the "login" button
    And the user should be on the "login" page

  @regression
  Scenario: User should not be able to log in to the application with valid credentials
    Given the user navigates to the login page
    Then the user enters "test333@email.com" into "email" field in login page
    And the user enters "123456789!!" into "password" field in login page
    And the user clicks the "login" button
    And the user should be on the "login" page
    Then the user should see an error message that reads "Invalid email or password"

  @regression
  Scenario: User should be able to log in to the application with valid credentials
    Given the user navigates to the login page
    Then the user creates an random account
    And the user "logs out"
    And the user enters the random account credentials into the login fields
    And the user clicks the "login" button
    Then the user should be on the "dashboard" page
