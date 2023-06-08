import { Given, When, Then } from '@wdio/cucumber-framework';

import createPasswordPage from '../pageobjects/create.password.page';
import loginPage from '../pageobjects/login.page';
import passwordCreatedPage from '../pageobjects/password.created.page';
import fourthStepEmailPage from '../pageobjects/4th.step';
import files from '../pageobjects/ui.upload.files';



Given('I am on the emprising create password page', async function () {
    await createPasswordPage.open();// navigating to Create Password Page
});

When('I enter {string} password', async function (password1) {
    await createPasswordPage.passwordField(password1);
});

When('I re-enter {string} password', async function (password2) {
    await createPasswordPage.reEnterPasswordField(password2);
});

When('I click on create password button', async function () {
    await createPasswordPage.submitButton();

});

// Then('I expect some items are displayed on created password page', function () {
//     return passwordCreatedPage.CheckItems();
// });


// Then("I should get an {string}", function (errorType) {
//     if (errorType === "PASSWORD ERROR") return (createPasswordPage.errorPassConfirmation.waitForDisplayed());
//     return (createPasswordPage.errorPass.waitForDisplayed());

// });


// Then("Get an {string} error type with error message: {string}", function (errorType, message) {
//     if (errorType === "CONFIRM PASSWORD ERROR") return expect(createPasswordPage.errorPass.getText()).toEqual(message);
//     return expect(createPasswordPage.errorPassConfirmation.getText()).toEqual(message)

// });

// Given('I am on the emprising login page', function () {
//     loginPage.open();// navigating to login page
// });

// When('I login with username and password {string} {string}', function (user, pass) {
//     loginPage.loginAsClient(user, pass)
// });

// When('I go to survey on 4th step', function () {
//     browser.url('https://uat-app.emprising.com/survey/09839ba1-6441-4d67-9611-977828662d62/assessment-design/distribution/email');
// });

// When('DEBUG', function () {
//     browser.debug();
// });

// When('I choose EMAIL type of upload to upload {string} file', function (file) {
//     fourthStepEmailPage.uploadButtondisplayed();
//     files.uploadFiles(fourthStepEmailPage.uplaodButtonForEmail, `../../data/upload-files/${file}`);
// }
// );
