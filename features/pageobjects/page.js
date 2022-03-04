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
        return browser.url(`https://dev-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=028c1f89-9a14-4a07-b1a7-99188c361915&code=CfDJ8OIqJbWxBhFHnng258tZB4LVOnQEdu%2f%2b7wJ2Q4IL3Q0mjlgzcFpuRiCcidrEAVz7zrcZsvDAD5cAH52CWUbyAGFo1pw0UC4TqzofKh7deBtEHN7aErMgEBDkZZeXYZriTuFGAyBkqT4C1658PCcFYlgPsa6wQmNPbAN0P5ZddoSzLb6BzsxyMWYXbZBRZZohFfKlX5DdzmwJZCQF2RQfkUqckX0%2fo%2bYkBNlZcihz3Z0Z&culture=en-US`)
    }
}
