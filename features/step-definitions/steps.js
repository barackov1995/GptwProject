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

Then('I expcet to have {string} text on the created password page', function (text) {
    return passwordCreatedPage.checkItem(text);
});

