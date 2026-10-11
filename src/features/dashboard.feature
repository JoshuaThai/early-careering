Feature: Dashboard Page
Description: Checking if user can access dashboard page, view all relevant buttons,
and navigate to the other corresponding pages.

  @smoke
  Scenario: Verify that user can sign up with test account and access dashboard
    Given the user navigates to the login page
    When the user clicks the sign up switch
    Then the user enters the test account information
    And the user clicks the "sign up" button
    Then the user should be on the "dashboard" page

  @smoke
  Scenario: Verify that nav bar displays only three links (Dashboard, Contact, FAQs)
    Given the user navigates to the login page
    When the user signs into the test account
    Then the user should be on the "dashboard" page
    And the user verifies that all three nav bar links can be seen in dashboard page

  @smoke
  Scenario: Verify that nav bar includes a profile button that when hovered over displays three more links (Your Profile, Terms and Conditions, Log Out)
    Given the user navigates to the login page
    When the user signs into the test account
    Then the user should be on the "dashboard" page
    And the user verifies that the nav bar has a profile button
    And the user verifies that the profile button includes three links

  @smoke
  Scenario: Verify that user is always redirected to dashboard page when trying to access homepage from footer
    Given the user navigates to the login page
    When the user signs into the test account
    Then the user should be on the "dashboard" page
    And the user should see a "home" link in the footer
    And the user clicks "home" in footer
    Then the user should be on the "dashboard" page

  @smoke
  Scenario: Verify that in small screens, a modal window that displays the same three links as nav bar and a button with the user's name
    Given the user navigates to the login page
    When the user signs into the test account
    Then the user should be on the "dashboard" page
    And the user reduces the window size to "800" by "600"
    And the user clicks the "menu" button
    And the user verifies that they see "three links" in the logged in modal
    Then the user verifies that they also see a button with the user's name

  @smoke
  Scenario: Verify that in small screens, a modal window contains a button with the user's name that when clicked, it will display three more links (Your Profile, Terms and Conditions, Log Out)
    Given the user navigates to the login page
    When the user signs into the test account
    Then the user should be on the "dashboard" page
    And the user reduces the window size to "800" by "600"
    And the user clicks the "menu" button
    And the user verifies that they also see a button with the user's name
    And the user clicks the button with the user's name
    Then the user verifies that they see "three more links" in the logged in modal
