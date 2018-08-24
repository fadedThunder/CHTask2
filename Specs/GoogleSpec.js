browser.driver.ignoreSynchronization = true;
import GooglePage from "../Pages/GooglePage";


describe('non-angular login', () => {
    beforeEach(() => {
        GooglePage.goto();

    });

    it('should wait for the non angular page to load ie GooglePage', () => {

        GooglePage.waitForAnElement(GooglePage.searchBox);
        expect(GooglePage.getPageName()).toBe('Images');
    });


    it('should type the image what has declared in the conf file and then it ' +
        'will click on the nth image given in the conf file', () => {

        GooglePage.searchForInGoogle(browser.params.imageName);
        GooglePage.hitEnter();
        GooglePage.waitForAnElement(GooglePage.imagePageLoad);
        GooglePage.clickDynamically();
        GooglePage.waitForAnElement(GooglePage.toCheckImagePresent);
        expect(GooglePage.getTitle()).toBe(browser.params.imageName + GooglePage.toAssertIntheImagePage);

    });
});









