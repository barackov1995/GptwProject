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
    // browser.debug()
    createPasswordPage.submitButton();

});

Then('I expect some items are displayed on created password page', function () {
    return passwordCreatedPage.CheckItems();
});

Then('The error message should say: {string}', function (message) {
    return expect(createPasswordPage.errorPass.getText()).toEqual(message);
});

Then('The following error message is displayed: {string}', function (text) {
    return expect(createPasswordPage.errorPassConfirmation.getText()).toEqual(text);
});

Then("I should get an {string}", function (errorType) {
    if (errorType === "TYPE1") {
        return (createPasswordPage.errorPassConfirmation.waitForDisplayed());
    } else if (errorType === "TYPE2") {
        return (createPasswordPage.errorPass.waitForDisplayed());
    }
});


Then("Get an {string} error type with error message: {string}", function (errorType, message) {
    if (errorType === "TYPE2") return expect(createPasswordPage.errorPass.getText()).toEqual(message);


}
);
