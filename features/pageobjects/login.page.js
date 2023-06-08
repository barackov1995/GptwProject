const Page = require('./page');

class loginPage extends Page {
    /**
    * define elements
    */

    get usernameInput() { return $('//*[@name="Email"]'); }

    get passwordInput() { return $('//*[@name="Password"]'); }

    get loginButton() { return $('//*[@type="submit"]'); }


    loginAsClient(username, password) {
        if (!this.usernameInput.isDisplayed()) {
            this.usernameInput.waitForClickable();
        }
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }
}

module.exports = new loginPage();