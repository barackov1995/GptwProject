Feature: Create password page

  Feature description:

  Setting password for hr admins and managres

  Scenario: Setting password, happy path

    Given I am on the emprising create password page
    When I enter "Create.pass123" password
    And I re-enter "Create.pass123" password
    And I click on create password button
    Then I expect some items are displayed on created password page

  Scenario: Setting password leaving all fields blank
    Given I am on the emprising create password page
    When I click on create password button
    Then The error message should say: "The Password field is required."

  Scenario: Setting password, which does not meet the password policy requirements.
    Given I am on the emprising create password page
    When I enter "test123" password
    And I re-enter "test123" password
    Then The error message should say: "The password does not meet the password policy requirements."

  Scenario: Setting password, confirmation password do not match
    Given I am on the emprising create password page
    And I enter "Create.pass123" password
    When I re-enter "Create.pass" password
    And I click on create password button
    Then The following error message is displayed: "The password and confirmation password do not match."