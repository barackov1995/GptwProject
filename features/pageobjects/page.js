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
        return browser.url(`https://dev-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=1b2403b3-94bc-4d3a-bd0d-b96a8308fddd&code=CfDJ8OIqJbWxBhFHnng258tZB4INhGJPynjeq%2fYhLiOcj7usCgmqbiS7U85d5ABfUvxxZKHYTsiP8hvzNk0X3pA0prCrhXWoiabIbO8F4ehbdx5Lqu7JheTb3AIWj4i5%2b29Su%2f0aOfClUiQ2tgjNAMfY3xSOV3AXJSQB6PyFc27i1Crz9h5Ai0mA0tHHqpLjvcLZ%2bmfKKeCJfTV09suvb3awLQ2sigSjLo3JaB72xJbaQF5V&culture=en-US`)
    }
}
