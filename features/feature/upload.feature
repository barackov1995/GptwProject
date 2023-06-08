@dejan
Feature: Upload

Scenario: Upload file on fourth step
Given I am on the emprising login page
And I login with username and password "dejan.barackov+automationupload@htecgroup.com" "Najed.vokcarab95"
When I go to survey on 4th step
Then I choose EMAIL type of upload to upload "emails.xlsx" file
And DEBUG