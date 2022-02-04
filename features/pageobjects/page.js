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
        return browser.url(`https://qa-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=7aedf67a-f092-41b7-969b-ba2e55901a23&code=CfDJ8GX1crym5IROkYfXPvnJkFYDtur4NXRZrWNTFK3npdcY9sQ5fYF1h%2f%2bgbTqNkIaTyzrGFRdIHffPN5GjjcqXgWmt9yxPHXBvk7BVCBUyTTh4UR%2bk7bk3d%2fJ55eZ6jIQMiF%2fMy5tK5oEcttycinQbiUQbYF5DOA%2bL5G9meJUUnCkG9h5SEfjRSXADiX7s2Yu%2bEdVqL%2bUrMHecBzLA8jR4nv0KNEwBTDLnS%2fmpzo%2f6eaWC&culture=en-US`)
    }
}
