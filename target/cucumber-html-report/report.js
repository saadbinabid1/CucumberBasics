$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("belly.feature");
formatter.feature({
  "line": 1,
  "name": "Belly",
  "description": "Optional description of the feature",
  "id": "belly",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have 42 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.I_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 66580800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_wait_hour(int)"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.my_belly_should_growl()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "User Certification",
  "description": "",
  "id": "user-certification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User is Passed",
  "description": "",
  "id": "user-certification;user-is-passed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "that the user Saad is given a task to clear Java certification exam",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Saad got 60 marks in exam",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Saad is known as Java certified",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Saad",
      "offset": 14
    },
    {
      "val": "Java",
      "offset": 44
    }
  ],
  "location": "UserSteps.certificationName(String,String)"
});
formatter.result({
  "duration": 1577900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saad",
      "offset": 0
    },
    {
      "val": "60",
      "offset": 9
    }
  ],
  "location": "UserSteps.gotMarks(String,int)"
});
formatter.result({
  "duration": 114900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saad",
      "offset": 0
    },
    {
      "val": "Java",
      "offset": 17
    }
  ],
  "location": "UserSteps.certifiedYes(String,String)"
});
formatter.result({
  "duration": 2143800,
  "status": "passed"
});
});