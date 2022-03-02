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
        return browser.url(`https://qa-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=7aedf67a-f092-41b7-969b-ba2e55901a23&code=CfDJ8FieISvxm%2b5Brn%2f2YhAG2jBWgIa4IhTVNPSdUS3T9OGin1pQWNzFEQjesAgQ5fqURpaBN%2bMLXdYo3VElqZX%2bVaJlolwPtKrRPXTX5gwsyVijnxZpNIv1Ta0IIpVtfxEO172BjROzBJmQEAyi5mwlQn4ueDXUG1%2flR1Ky5ZLtWvXU1FkC5Uc%2fVpBrndJ6enG6IWxtJGTF4wq46e0vNaWURLU78H%2f2qlt2Fc9%2fMOp7a2AU&culture=en-US`)
    }
}
