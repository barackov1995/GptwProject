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
        return browser.url(`https://qa-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=ffccdb91-3a60-4247-accc-1d9048f37943&code=CfDJ8GX1crym5IROkYfXPvnJkFa1LU8JG5vHLt6LFm5H6wM6kpPTXXfsVMqUxQD7gDECsucIUoXQOTNMfGiDMCuOcVWraT8dK27DRBoIxKbv%2fWh1uqUL1r%2fSsci9QCg%2fUnQF%2f%2bO2LtUHlkYTKhKaQoIH%2f40HvQWVMk4soABEQBRK8vvv4O6WbNFwjTnvbGcqDKqwzhvIUVxpE5R1yPrF9riMJko8%2biNmnyFsNZb2zc60JIFE&culture=en-US`)
    }
}
