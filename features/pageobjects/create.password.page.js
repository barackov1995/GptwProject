

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class createPasswordPage extends Page {
    /**
     * define selectors using getter methods
     */
    get password() { return $('#Password') }
    get reEnterPassword() { return $('#ConfirmPassword') }
    get btnSubmit() { return $('button=Create password') }
    get errorPass() { return $('#Password-error') }
    get errorPassConfirmation() { return $('#ConfirmPassword-error') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create password using password 1 and password2
     */
    async passwordField(pass1) {
       await this.password.setValue(pass1);
    };

    async reEnterPasswordField(pass2) {
        await this.reEnterPassword.setValue(pass2);
    };

    async submitButton() {
        if (!await this.btnSubmit.isDisplayed()) {
            await this.btnSubmit.waitForDisplayed();
        }
        await this.btnSubmit.click();
    };

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new createPasswordPage();
