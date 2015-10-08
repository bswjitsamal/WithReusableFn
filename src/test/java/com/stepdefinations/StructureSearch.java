package com.stepdefinations;

import java.util.List;

import com.helper.DriverFactory;
import com.helper.ReusableMethods;

import cucumber.api.java.en.When;

public class StructureSearch extends DriverFactory{
	

@When("^user search with criteria and criteria as follows:$")
public void user_search_with_criteria_and_criteria_as_follows(List<StructureCriteria> users) throws Throwable {
  
	StructureCriteria userStructureCriteria = users.get(0);
	ReusableMethods.Click(driver, "//h2[@class='pillow-btn']", "xpath");
	ReusableMethods.Click(driver, "//li[2]/a/div", "xpath");
	ReusableMethods.enterText(driver, "searchTerm", userStructureCriteria.value, "id");
	
    
}

private class StructureCriteria{
	
	public String value;
	
}

}
