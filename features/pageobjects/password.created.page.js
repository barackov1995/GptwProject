const Page = require('./page');

class passwordCreatedPage extends Page {

    get emprisingLogo() { return $('.emprising-logo'); }
    get certificationLogo() { return $('.cert-logo'); }

    CheckItems() {
        expect(this.emprisingLogo.isDisplayed()).to.be.true;
        expect(this.certificationLogo.isDisplayed()).to.be.true;
    }

};


module.exports = new passwordCreatedPage();