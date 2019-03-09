package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/nitin.kumar2/workspace/BDD/src/main/java/Features/login.feature",
		glue={"step_definition"},
		format={"pretty","html:test-output"},//used for pretty report output in html format in test-output folder
		monochrome=true,//display the console output in proper readable format
		strict=true, //it will check if any step is not defined in step definition file
		dryRun=false	//to check the mapping is proper between feature file and step def file
		
		)

public class TestRunner {

}
