@dashboardTest
Feature: Fintech Backoffice - Dashboard

  I want to access dashboard on fintech backoffice

  @positiveTesting
  Scenario: Access dashboard backoffice
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I login using admin account
    Then I see "Dashboard | Fintech Backoffice" in the title
    Then I see the dashboard backoffice message "Welcome to Fintech Backoffice"
    Then I click button logout