import Page from './page';

class passwordCreatedPage extends Page {

    get emprisingLogo() { return $('.emprising-logo'); }
    get certificationLogo() { return $('.cert-logo'); }

    CheckItems() {
        expect(this.emprisingLogo.isDisplayed()).toEqual(true);
        expect(this.certificationLogo.isDisplayed()).toEqual(true);
    }

};


export default new passwordCreatedPage();