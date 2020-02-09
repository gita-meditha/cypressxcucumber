@loginTest
Feature: Fintech Backoffice - Login

  I want to login on fintech backoffice

  @positiveTesting
  Scenario: Login using valid account
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I login using admin account
    Then I see the dashboard backoffice message "Welcome to Fintech Backoffice"

  Scenario: Login using wrong password
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I fill in email field using "damar.aji@ralali.com"
    Then I fill in password field using "123456xyz"
    When I click button login
    Then I see the error message "User not found"