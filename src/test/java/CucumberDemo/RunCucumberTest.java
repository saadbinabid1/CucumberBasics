package CucumberDemo;
//import com.cucumber.listener.Reporter;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/test/resources/CucumberDemo",
        plugin = { "pretty", "html:target/cucumber-html-report" ,"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
        monochrome = true)
public class RunCucumberTest{
    @AfterClass
    public static void writeExtentReport()
    {
        Reporter.loadXMLConfig(new File("config/report1.xml"));

    }

}