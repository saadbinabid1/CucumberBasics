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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});