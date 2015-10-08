Feature: 
  As a user
  I want to test search functionality in the system
  
   Background: 
    Given user is on Home page
  
  @Generic-Search
  Scenario: Test Generic Search in the site
    And user search with data as follows:
    | value     | 
    | Tungsten  | 
    And user click on search button
    Then user should be in result page
    
  @Element-Search
  Scenario: Test Element Search in the site
    When user search with data and criteria as follows:
     | value     | 
     | Tungsten  | 
    And user click on search button
    Then user should be in result page
    
  @Structure-Search
  Scenario: Test Structure Search in the site
    When user search with criteria and criteria as follows:
      | value     | 
      | Tungsten  | 
    And user click on search button
    Then user should be in result page
 