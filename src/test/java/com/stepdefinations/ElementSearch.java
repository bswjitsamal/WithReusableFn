package com.stepdefinations;

import java.util.List;

import com.helper.DriverFactory;
import com.helper.ReusableMethods;

import cucumber.api.java.en.When;

public class ElementSearch extends DriverFactory {

	@When("^user search with data and criteria as follows:$")
	public void user_search_with_data_and_criteria_as_follows(List<ElementCriteria> users) throws Throwable {

		ElementCriteria userElementCriteria = users.get(0);
		ReusableMethods.Click(driver, "//h2[@class='pillow-btn']", "xpath");
		ReusableMethods.Click(driver, "//li[1]/a/div", "xpath");
		ReusableMethods.enterText(driver, "searchTerm", userElementCriteria.value, "id");

	}

	private class ElementCriteria {
		
		public String value;

	}

}
