Feature: User Navigation
Als Nutzer der Webseite möchte ich ein Menü zur Verfügung haben, damit ich mich durch die Anwendung navigieren kann.
 
  Scenario: Check for page
    Given I`m in my browser
    When I enter in the url "localhost:8081/ui5"
    Then I should be navigated UI5-Application Landingpage


   Scenario: Check for navigation elements
    Given I`m on the Landingpage
    When I search for the navigation
    Then I should see the navigation-items
    | How It Works |
    | Features     |
    | Contact      |
    | About        |


    Scenario: Check for working navigation
    Given I`m on the Landingpage
    When I click on a navigation item
    Then I be directed to the page
    | How It Works |
    | Features     |
    | Contact      |
    | About        |