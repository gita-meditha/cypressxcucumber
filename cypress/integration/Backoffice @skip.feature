@skip
Feature: Fintech Backoffice

  I want to access fintech backoffice

  @positiveTesting
  Scenario: Access backoffice
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title