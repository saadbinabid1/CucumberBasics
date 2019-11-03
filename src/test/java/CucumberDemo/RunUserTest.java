package CucumberDemo;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import java.text.SimpleDateFormat;
import java.util.Date;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/", plugin = { "pretty", "html:target/cucumber-html-report"})
public class RunUserTest {}
