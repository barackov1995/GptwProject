const { Given, When, Then } = require('@wdio/cucumber-framework');

const createPasswordPage = require('../pageobjects/login.page');
const passwordCreatedPage = require('../pageobjects/password.created.page');
const SecurePage = require('../pageobjects/secure.page');


Given('I am on the emprising create password page', function () {
    createPasswordPage.open();// navigating to Create Password Page
});

When('I enter {string} password', function (password1) {
    createPasswordPage.passwordField(password1);
});

When('I re-enter {string} password', function (password2) {
    createPasswordPage.reEnterPasswordField(password2);
});

When('I click on create password button', function () {
    createPasswordPage.submitButton();

});

Then('I expect some items are displayed on created password page', function () {
    return passwordCreatedPage.CheckItems();
});


Then("I should get an {string}", function (errorType) {
    if (errorType === "PASSWORD ERROR") return (createPasswordPage.errorPassConfirmation.waitForDisplayed());
    return (createPasswordPage.errorPass.waitForDisplayed());

});


Then("Get an {string} error type with error message: {string}", function (errorType, message) {
    if (errorType === "CONFIRM PASSWORD ERROR") return expect(createPasswordPage.errorPass.getText()).toEqual(message);
    return expect(createPasswordPage.errorPassConfirmation.getText()).toEqual(message)

}
);
