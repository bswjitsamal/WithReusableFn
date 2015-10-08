package com.stepdefinations;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import com.helper.DriverFactory;
import com.helper.ReusableMethods;
import cucumber.api.java.en.*;

public class TypesOfsearch extends DriverFactory {
	
	@Given("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.get("http://materials.springer.com");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	    
	}

	@When("^user search with data as follows:$")
	public void user_search_with_data_as_follows(List<SearchDetails> users) throws Throwable {
		
		SearchDetails userSearchData = users.get(0);
		ReusableMethods.enterText(driver, "searchTerm", userSearchData.value, "id");
	    
	}
	
	
	//Creating an inner class
	private class SearchDetails{
		
		public String value;
		
	}

	@When("^user click on search button$")
	public void user_click_on_search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		ReusableMethods.Click(driver, "search", "id");
	}

	@Then("^user should be in result page$")
	public void user_should_be_in_result_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
				
     Assert.assertTrue( driver.getTitle().equals("Search Results - SpringerMaterials"));
	}


}
