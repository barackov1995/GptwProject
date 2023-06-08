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
        return browser.url(`https://uat-login.greatplacetowork.com/identity/Account/Login?ReturnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DGptwCMP%26redirect_uri%3Dhttps%253A%252F%252Fuat-app.emprising.com%252Flogin.html%26response_type%3Did_token%2520token%26scope%3Dopenid%2520GptwClientLoginScope%2520all_claims%2520profile%2520email%26state%3Ddd37eb8f34ff4bf8ad865a926e20dade%26nonce%3D362328032ede42c4931b32126068c4f2`)
    }
}
