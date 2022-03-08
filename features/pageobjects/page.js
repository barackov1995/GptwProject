/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * this part is implemented this way because I don't have a part of the test before this one that leads to an email with a link to this page. 
    */
   
    open() {
        return browser.url(`https://qa-login.greatplacetowork.com/identity/Account/PasswordSetup?userId=a8a5ff9f-c62e-4621-9517-cba1424aa034&code=CfDJ8FieISvxm%2b5Brn%2f2YhAG2jDDU%2fYX%2fbQmGKP76fc%2febVOoVBfDzS1IK%2feJXHEoOQwZf%2b9FctLSYl6XN7ORV0%2fYL0PWJDuHKPwwQ8BzfeshnH1UXTGvQ7z4uXcO5R0cRUvZfvqxGZz3QIkJaPu2k3%2fadXALv05qA599o1k6LRTvwpKk5O9mNL37bDpbp9jzTmjVMKcNpQs3gqqHLlIFVOMSI2aR9ibWfWsEXaXDYZ4F%2bdI&culture=en-US`)
    }
}
