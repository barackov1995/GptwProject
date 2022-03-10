Feature: Create password page

  Feature description:

  Setting password for hr admins and managers

  Scenario Outline: Setting password, unhappy path
    Given I am on the emprising create password page
    And I enter <PASSWORD FIELD> password
    When I re-enter <RE-ENTER PASSWORD FIELD> password
    And I click on create password button
    And I should get an <ERROR TYPE>
    Then Get an <ERROR TYPE> error type with error message: <ERROR MESSAGE>

    # Scenario: Setting password, happy path

    #   Given I am on the emprising create password page
    #   When I enter "Create.pass123" password
    #   And I re-enter "Create.pass123" password
    #   And I click on create password button
    #   Then I expect some items are displayed on created password page

    Examples:
      | PASSWORD FIELD       | RE-ENTER PASSWORD FIELD | ERROR TYPE               | ERROR MESSAGE                                                  |
      | "Create.pass123"     | "Create.pass"           | "PASSWORD ERROR"         | "The password and confirmation password do not match."         |
      | ""                   | ""                      | "CONFIRM PASSWORD ERROR" | "The Password field is required."                              |
      | "Test.1"             | ""                      | "CONFIRM PASSWORD ERROR" | "The password does not meet the password policy requirements." |
      | "CREATE.PASSWORD123" | ""                      | "CONFIRM PASSWORD ERROR" | "The password does not meet the password policy requirements." |
      | "create.pass123"     | ""                      | "CONFIRM PASSWORD ERROR" | "The password does not meet the password policy requirements." |
      | "Create.pass"        | ""                      | "CONFIRM PASSWORD ERROR" | "The password does not meet the password policy requirements." |
      | "Createpass123"      | ""                      | "CONFIRM PASSWORD ERROR" | "The password does not meet the password policy requirements." |







