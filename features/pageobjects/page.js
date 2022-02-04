/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open() {
        return browser.url(`https://qa-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=7aedf67a-f092-41b7-969b-ba2e55901a23&code=CfDJ8GX1crym5IROkYfXPvnJkFa6boWUk%2bJsQAKbIk23VPh%2bqCOqpXoF3dhaEyK6a2FcIbAFHTYP2NllWawvl%2bSnCbV5GEn0mBFQeVvTxY5g9y0nxeAsPINos60Z2MrNVdkmw4nP%2f6OcesVctQ03q6TUNsggH13HDca90pymIaZB06Eqau0z32s4U18WAZhp5ON%2bDRHPOMg5ms05kGDhkFcQck0l2Uw2m3ccp0Ob1XBl01IM&culture=en-US`)
    }
}
