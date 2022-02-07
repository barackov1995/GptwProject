const { Given, When, Then } = require('@wdio/cucumber-framework');

const createPasswordPage = require('../pageobjects/login.page');
const passwordCreatedPage = require('../pageobjects/password.created.page');
const SecurePage = require('../pageobjects/secure.page');


Given('I am on the emprising create password page', function () {
    createPasswordPage.open();// navigating to Create Password Page
});

When('I enter {string} password', function (pass1) {
    createPasswordPage.passwordField(pass1);
});

When('I re-enter {string} password', function (pass2) {
    createPasswordPage.reEnterPasswordField(pass2);
});

When('I click on create password button', function () {
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

