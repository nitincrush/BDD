package step_definition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//test case class where we write all the steps

public class login_stepdefinition {

	WebDriver driver;

	@Given("^User already on login page$")
	public void user_already_login_page() {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.get("https://www.facebook.com");
	}

	@When("^title of login page is facebook$")
	public void title_of_login_page_is_facebook() {

		String title = driver.getTitle();

		Assert.assertEquals("Facebook – log in or sign up", title);//expected, actual 
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void users_enter_username_and_password(String username, String password) {

		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {

		WebElement loginbutton = driver.findElement(By.id("loginbutton"));

		loginbutton.click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {

		String title1 = driver.getTitle();

		Assert.assertEquals("(6) Facebook", title1);

	}

}