//Common Page JS
function Page() {
    return {
        //data
        modalOpen: false, 
        sidebarOpen: false, 
        levelMap: false, 
        levelModalOpen: false,
        showCookieBanner: true,
        cookieName: 'cookiesEnabled',
        //methods
        setCookie() {
            var date = new Date();
            date.setSeconds(date.getSeconds() + 60);
            var expires = "expires="+date.toUTCString();
            document.cookie = this.cookieName + "=" + this.showCookieBanner + ";" + expires + ";path=/";
            this.showCookieBanner = false;
        },
        getCookie() {
            var cookiesEnabled = document.cookie.indexOf("cookiesEnabled=") !== -1;
            var hasCookie = document.cookie.indexOf(this.cookieName+"=true");
            if (cookiesEnabled) {
                hasCookie ? this.showCookieBanner = false: this.showCookieBanner = true;
            }
        }
    }
}

export default Page;