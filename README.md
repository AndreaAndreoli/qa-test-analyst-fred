# Technical Assessment - Test Analyst
This assessment requires the completion of 3 different tasks, one automated functional test, one analytical approach and a query


# Test #1 - Automation 

Using Cypress, write a front end automated script, targeting www.harveynorman.com.au where you:
1. Go to https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html
2. Check that the product is in stock
3. Add the product to cart
4. Check that it is in your shopping cart



### Additional items

This should include any checks a long the way that you deem necessary.


### Required Output

Once complete, commit your tests, along with any instructions and create a Pull request for it back to this repo


# Test #2 - Manual Test

Story - As a customer, I want to login and place an order using credit card payment method.

Referring to the website www.harveynorman.com.au, write all the possible test cases for the above Jira story.

### Required Output
The list of test cases to cater for the above task


# Test #3

Write an SQL query to retrieve the top 10 customers with first name, last name and email address, where the offer_type is "Staff" and the rule was created_in within last 7 days. 

The following is a table named "magento_offer" and the "magento_rule" tables structure

```
CREATE TABLE `magento_offer` (
  `offer_id` int(10) unsigned NOT NULL AUTO_INCREMENT ,
  `rule_id` int(10) unsigned NOT NULL ,
  `offer_type` varchar(255) NOT NULL,
  `customer_first_name` varchar(255) NOT NULL,
  `customer_last_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `created_by` varchar(255) NOT NULL,
  PRIMARY KEY (`offer_id`),
  CONSTRAINT `RULE_ID` FOREIGN KEY (`rule_id`) REFERENCES `magento_rule` (`rule_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE `magento_rule` (
  `rule_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL ,
  `description` text DEFAULT NULL ,
  `from_date` datetime DEFAULT NULL ,
  `to_date` datetime DEFAULT NULL ,
  `uses_per_customer` int(11) NOT NULL DEFAULT 0 ,
  `is_active` smallint(6) NOT NULL DEFAULT 0 ,
  `is_advanced` smallint(5) unsigned NOT NULL DEFAULT 1 ,
  `sort_order` int(10) unsigned NOT NULL DEFAULT 0 ,
  `created_in` bigint(20) unsigned NOT NULL DEFAULT 1 ,
  `updated_in` bigint(20) unsigned NOT NULL DEFAULT 2147483647 ,
  PRIMARY KEY (`rule_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
```

### Required Output
The sql query to achive the above

