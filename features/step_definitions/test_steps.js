const { Before, Given, When, Then, setDefaultTimeout } = require('cucumber')
const assert = require('assert');;
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, until } = require('selenium-webdriver');

let driver = new Builder()
.forBrowser('chrome')
.build();

setDefaultTimeout(15 * 1000)


Given('I`m in my browser', function () {
  // Write code here that turns the phrase above into concrete actions
  return driver.get("https://google.com")
});

When('I enter in the url {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return driver.get("localhost:8081/ui5");
});

Then('I should be navigated UI5-Application Landingpage', function () {
  // Write code here that turns the phrase above into concrete actions
  return driver.getTitle()
    .then(function (title) {
      assert.equal("CatalogZF", title); // Made up number
    });


});




Given('I`m on the Landingpage', function () {
  // Write code here that turns the phrase above into concrete actions
  return driver.get("localhost:8081/ui5");
});

When('I search for the navigation', function () {
  // Write code here that turns the phrase above into concrete actions

  var textPromise = driver.findElement(webdriver.By.css("a")).getText();
return textPromise.then((text) => {

});
});


Then('I should see the navigation-items', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(By.css('a'));
});





When('I click on a navigation item', function () {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(By.css('a')).click();
});


Then('I be directed to the page', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions


  var elem = driver.findElement(By.id('__xmlview1--text3'));
  return elem.getAttribute('innerHTML').then(function(s) {
    assert.equal(s, "It`s pretty simple, just follow the following steps and you will be able to have a great application with the ZF Design");
  });

  
});