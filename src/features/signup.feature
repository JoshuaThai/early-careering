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

  @regression
  Scenario: Verify that the user cannot sign up until they enter valid input into all required fields
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user clicks the "sign up" button
    And the user should remain on the "sign up" page

  @regression
  Scenario: Verify that confirm password does not pass similar but not exact password match
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters "124456789!" in "password"
    And the user enters "123456789!" in "confirm password"
    Then the confirm password must be "red" and say "✖ The passwords must match"

  @regression
  Scenario: Verify that the user cannot successfully sign up for an account until they have agreed to the term and services
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters "testing123@email.com" in "email"
    And the user enters "123456789!" in "password"
    And the user enters "123456789!" in "confirm password"
    And the user enters "Josh" in "First Name"
    And the user enters "4145009780" in "Phone Number"
    And the user selects "Early Career" in "Career Journey"
    And the user selects "Technology" in "Industry"
    And the user clicks the "sign up" button
    Then the user should remain on the "sign up" page

  @regression
  Scenario: Verify that confirm password passes identical and exact password match
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters "123456789!" in "password"
    And the user enters "123456789!" in "confirm password"
    Then the confirm password must be "green" and say "✔ The passwords match"

  @regression
  Scenario: Verify that the user can successfully sign up after they enter valid input into all required fields
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters "testing123@email.com" in "email"
    And the user enters "123456789!" in "password"
    And the user enters "123456789!" in "confirm password"
    And the user enters "Josh" in "First Name"
    And the user enters "4145009780" in "Phone Number"
    And the user selects "Early Career" in "Career Journey"
    And the user selects "Technology" in "Industry"
    And the user accepts the terms and services
    And the user clicks the "sign up" button
    Then the user should be on the "dashboard" page
# I need to fix this test case

  @regression
  Scenario: Verify that the user cannot sign up with a duplicate email
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters "testing1234@email.com" in "email"
    And the user enters "123456789!" in "password"
    And the user enters "123456789!" in "confirm password"
    And the user enters "Josh" in "First Name"
    And the user enters "4145009780" in "Phone Number"
    And the user selects "Early Career" in "Career Journey"
    And the user selects "Technology" in "Industry"
    And the user accepts the terms and services
    And the user clicks the "sign up" button
    And the user should be on the "dashboard" page
    And the user "logs out"
    And the user signs up with the duplicate account
    And the user should see an error message that says "User already exists. Use another email."
