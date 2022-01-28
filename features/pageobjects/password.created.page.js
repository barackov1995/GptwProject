const Page = require('./page');

class passwordCreatedPage extends Page {

    get passswordCreated() { return $('.mb90'); }

    checkItem(text) {
        expect(this.passswordCreated.getText()).toBe.equal(text);
    }

};


module.exports = new passwordCreatedPage();