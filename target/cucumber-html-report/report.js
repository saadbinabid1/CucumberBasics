$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/CucumberDemo/belly.feature");
formatter.feature({
  "name": "Belly",
  "description": "  Optional description of the feature",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "a few cukes",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have 42 cukes in my belly",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.I_have_cukes_in_my_belly(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_wait_hour(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.my_belly_should_growl()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/CucumberDemo/user.feature");
formatter.feature({
  "name": "User Certification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User is Passed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the user Saad is given a task to clear Java certification exam",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.certificationName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saad got 60 marks in exam",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.gotMarks(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saad is known as Java certified",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.certifiedYes(String,String)"
});
formatter.result({
  "status": "passed"
});
});