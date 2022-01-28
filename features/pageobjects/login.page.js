

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class createPasswordPage extends Page {
    /**
     * define selectors using getter methods
     */
    get password() { return $('#Password') }
    get reEnterPassword() { return $('#ConfirmPassword') }
    get btnSubmit() { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create password using password 1 and password2
     */
    passwordField (pass1) {
        this.password.setValue(pass1);
    };

    reEnterPasswordField (pass2) {
        this.reEnterPassword.setValue(pass2);
    };

    submitButton() {
        this.btnSubmit.click();
    };

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new createPasswordPage();
