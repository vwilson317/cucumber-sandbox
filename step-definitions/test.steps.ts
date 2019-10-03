import * as selenium from 'selenium-webdriver'
import { BeforeAll, Given, When, Then } from 'cucumber'
import { assert } from 'chai';

const driver = new selenium.Builder().forBrowser("chrome").build();

BeforeAll({ timeout: 10 * 1000 }, () => {
    driver.get("www.google.com");
});

Given("I do something", () => {
    assert.isTrue(true);
});

When('I go to a url', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the page loads', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});