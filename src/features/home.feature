Feature: Test if the user can access the homepage and that you can access the other pages from it.

  @smoke
  Scenario: User can access the homepage
    Given the user is on the homepage
    Then the user should see the title "EarlyCareering"
    And the user should see all of the section headings and the header

  @smoke
  Scenario: Check if Home Link in nav bar navigates to home
    Given the user is on the homepage
    When the users click on the Home link in nav bar
    Then the user verifies that the user is still on the homepage

  @smoke
  Scenario: Check if clicking logo navigates to home
    Given the user is on the homepage
    When the user click on the logo in the header
    Then the user verifies that the user is still on the homepage

  @smoke
  Scenario: Check if user can navigate to login/signup page
    Given the user is on the homepage
    When the users click on the Login-Sign Up button
    Then the user verifies that they end up on the login page
