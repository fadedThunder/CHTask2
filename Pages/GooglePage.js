// page is non-angular
browser.ignoreSynchronization = true;

class GooglePage {
    constructor() {

        this.timeout = {
            'xs': 420,
            's': 1000,
            'm': 2000,
            'l': 5000,
            'xl': 9000,
            'xxl': 15000
        };

        this.url = '/';
        this.pageName = element(by.id('hplogo'));
        this.searchBox = element(by.name('q'));
        this.imagePageLoad = element(by.xpath('//div[@id=\'rg_s\']//div[1]//a[1]'));
        this.toCheckImagePresent = element(by.xpath('//a[@id=\'logo\']'));
        this.toAssertIntheImagePage = ' - Google Search';


    }

    loaded() {
        browser.wait(this.timeout.xl);
    }

    goto() {
        browser.get(this.url, this.timeout.xl);


    }

    waitForAnElement(locator) {

        return browser.wait(protractor.ExpectedConditions.visibilityOf(locator), 5000);
    }

    searchForInGoogle(string) {
        return this.searchBox.sendKeys(string);
    }

    getPageName() {
        return this.pageName.getText();
    }

    waitForPageToLoad() {
        this.loaded();
    }

    hitEnter() {

        return browser.actions().sendKeys(protractor.Key.ENTER).perform();

    }

    clickDynamically() {
        var n = browser.params.imageNumber;
        console.log(n);
        return element(by.xpath('//div[@id=\'rg\']//div[' + n + ']//img')).click();


    }

    checkElementIsPresent(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    hasText(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    getTitle() {
        return browser.getTitle();
    }
}


export default new GooglePage();