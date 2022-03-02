Feature: Create password page

  Feature description:

  Setting password for hr admins and managres

  # Scenario: Setting password leaving all fields blank
  #   Given I am on the emprising create password page
  #   When I click on create password button
  #   Then The error message should say: "The Password field is required."

  # Scenario: Setting password, which does not meet the password policy requirements.
  #   Given I am on the emprising create password page
  #   When I enter "test123" password
  #   And I click on create password button
  #   Then The error message should say: "The password does not meet the password policy requirements."

  # Scenario: Setting password, first unhappy path
  #   Given I am on the emprising create password page
  #   And I enter <PASSWORD1> password
  #   When I re-enter <PASSWORD2> password
  #   And I click on create password button
  #   And I should get an <ERROR TYPE>
  #   Then Get an <ERROR TYPE> error type with message: <ERROR MESSAGE>

  Scenario: Setting password, second unhappy path
    Given I am on the emprising create password page
    And I enter "test123" password
    # When I re-enter <PASSWORD2> password
    And I click on create password button
    # And I should get an <ERROR TYPE>
    # Then Get an <ERROR TYPE> error type with error message: <ERROR MESSAGE>

    # Scenario: Setting password, happy path

    #   Given I am on the emprising create password page
    #   When I enter "Create.pass123" password
    #   And I re-enter "Create.pass123" password
    #   And I click on create password button
    #   Then I expect some items are displayed on created password page

    # Examples:
    #   | PASSWORD1        | PASSWORD2     | ERROR TYPE | ERROR MESSAGE                                                  |
    #   # | "Create.pass123" | "Create.pass" | "TYPE1"    | "The password and confirmation password do not match."         |
    #   | "test123"        | ""            | "TYPE2"    | "The password does not meet the password policy requirements." |
    #   # | ""               | ""            | "TYPE2"    | "The Password field is required."                              |



