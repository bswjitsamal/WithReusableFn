$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TypeOfSearch.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\r\nI want to test search functionality in the system",
  "id": "",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TypesOfsearch.user_is_on_Home_page()"
});
formatter.result({
  "duration": 102198370926,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Test Generic Search in the site",
  "description": "",
  "id": ";test-generic-search-in-the-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Generic-Search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user search with data as follows:",
  "rows": [
    {
      "cells": [
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "Tungsten"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "TypesOfsearch.user_search_with_data_as_follows(TypesOfsearch$SearchDetails\u003e)"
});
formatter.result({
  "duration": 6436537464,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_click_on_search_button()"
});
formatter.result({
  "duration": 9984623378,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_should_be_in_result_page()"
});
formatter.result({
  "duration": 2833725130,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TypesOfsearch.user_is_on_Home_page()"
});
formatter.result({
  "duration": 8670398880,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test Element Search in the site",
  "description": "",
  "id": ";test-element-search-in-the-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Element-Search"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user search with data and criteria as follows:",
  "rows": [
    {
      "cells": [
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "Tungsten"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should be in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "ElementSearch.user_search_with_data_and_criteria_as_follows(ElementSearch$ElementCriteria\u003e)"
});
formatter.result({
  "duration": 11924486106,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_click_on_search_button()"
});
formatter.result({
  "duration": 7013927242,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_should_be_in_result_page()"
});
formatter.result({
  "duration": 1966469229,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TypesOfsearch.user_is_on_Home_page()"
});
formatter.result({
  "duration": 6600484528,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Test Structure Search in the site",
  "description": "",
  "id": ";test-structure-search-in-the-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Structure-Search"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user search with criteria and criteria as follows:",
  "rows": [
    {
      "cells": [
        "value"
      ],
      "line": 27
    },
    {
      "cells": [
        "Tungsten"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should be in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "StructureSearch.user_search_with_criteria_and_criteria_as_follows(StructureSearch$StructureCriteria\u003e)"
});
formatter.result({
  "duration": 9872473179,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_click_on_search_button()"
});
formatter.result({
  "duration": 313676521,
  "status": "passed"
});
formatter.match({
  "location": "TypesOfsearch.user_should_be_in_result_page()"
});
formatter.result({
  "duration": 4518873952,
  "status": "passed"
});
});