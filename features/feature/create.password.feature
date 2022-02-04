Feature: Create password page

  Feature description:

  Setting password for hr admins and managres

  Scenario: Setting password, happy path

    Given I am on the emprising create password page
    When I enter "Create.pass123" password
    And I re-enter "Create.pass123" password
    And I click on create password button
    Then I expect some items are displayed on created password page

  Scenario: Setting password with incorrectly inputed re-enter password