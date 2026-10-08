Feature: Homepage Tests
Description: Test if the user can access the homepage and that you can access the other pages 
from it.

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

  @regression
  Scenario: Check if user can see hamburger menu button when window size is reduced to 700 x 700
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user should see the hamburger menu button

  @regression
  Scenario: Check if a modal window appears when the user clicks the hamburger menu button
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user clicks the hamburger menu button
    And the user should see the modal window with nav links for logged out users

  @regression
  Scenario: Check if you can redirect to home from the link in hamburger menu modal
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user clicks the hamburger menu button
    And the user should see the modal window with nav links for logged out users
    And the user should click the "home" link
    Then the user should be on the homepage

  @regression
  Scenario: Check if you can redirect to login page from the link in hamburger menu modal
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user clicks the hamburger menu button
    And the user should see the modal window with nav links for logged out users
    And the user should click the "login" link
    And the user should be on the "login" page

  @regression
  Scenario: Check if you can redirect to features page from the link in hamburger menu modal
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user clicks the hamburger menu button
    And the user should see the modal window with nav links for logged out users
    And the user should click the "features" link
    Then the user should be on the "features" page

  @regression
  Scenario: Check if you can redirect to about page from the link in hamburger menu modal
    Given the user is on the homepage
    When the user reduces the window size to "700" by "700"
    Then the user clicks the hamburger menu button
    And the user should see the modal window with nav links for logged out users
    And the user should click the "about" link
    Then the user should be on the "about" page
