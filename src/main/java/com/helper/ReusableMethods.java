package com.helper;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class ReusableMethods {

	// Enter text in text box

	public static void enterText(WebDriver driver, String element,
			String value, String elementtype) {

		if (elementtype == "id")
			driver.findElement(By.id(element)).sendKeys(value);
		if (elementtype == "name")
			driver.findElement(By.name(element)).sendKeys(value);

	}

	// Click into a button, Checkbox, option etc
	public static void Click(WebDriver driver, String element,
			String elementtype) {
		if (elementtype == "id")
			driver.findElement(By.id(element)).click();
		if (elementtype == "name")
			driver.findElement(By.name(element)).click();
		if (elementtype == "xpath")
			driver.findElement(By.xpath(element)).click();

	}

	// Selecting a drop down control
	public static void SelectDropDown(WebDriver driver, String element,
			String value, String elementtype) {
		if (elementtype == "id")
			new Select(driver.findElement(By.id(element)))
					.selectByVisibleText(value);
		if (elementtype == "name")
			new Select(driver.findElement(By.name(element)))
					.selectByVisibleText(value);
		if (elementtype == "xpath")
			new Select(driver.findElement(By.xpath(element)))
					.selectByVisibleText(value);

	}

}
