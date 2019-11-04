package CucumberDemo;
import com.cucumber.listener.ExtentCucumberFormatter;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/test/resources/CucumberDemo",
        plugin = { "pretty", "html:target/cucumber-html-report" ,"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
        monochrome = true)
public class RunUserTest {

        @AfterClass
        public static void writeExtentReport()
        {
            // solved the pie chart issue in the reporting via the following url
            // using the command in so jenkins console: System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';")
            //https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j/35785788#35785788
               Reporter.loadXMLConfig(new File("config/report.xml"));
        }

}
