import Page from './page';

class FourthStepEmailPage extends Page {
    // define elements

    get emailInputBtn() { return $('#emailDistributionBtn'); }

    get uplaodButtonForEmail() { return $('//*[@id="emailDistributionBtn"]/input'); }

    /**
         * define or overwrite page methods
         */
    waitButtonToAppear() {
        this.uplaodButtonForEmail.waitForDisplayed()
    }

    uploadButtondisplayed() {
        browser.waitUntil(() => this.emailInputBtn.isDisplayed());
    }
}

export default new FourthStepEmailPage();