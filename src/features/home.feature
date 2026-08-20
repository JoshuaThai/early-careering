Feature: Test if User can access the homepage at least

  Scenario: User can access the homepage
    Given the user is on the homepage
    Then the user should see the title "EarlyCareering"
