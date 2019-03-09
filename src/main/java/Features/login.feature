Feature: Login Feature 

#Scenario: Login Test Scenario

#1.without Examples keyword
#	Given User already on login page 
#	When title of login page is facebook 
#	Then User enters "nitin.crush@gmail.com" and "golghar" 
#	Then user clicks on login button 
#	Then user is on home page
#	
#2. with Examples keyword with Scenario Outline

Scenario Outline: Login Test Scenario

	Given User already on login page 
	When title of login page is facebook 
	Then User enters "<username>" and "<password>" 
	Then user clicks on login button 
	Then user is on home page 
	
	Examples: 
		| username | password |
		| nitin.crush@gmail.com | golghar |	
		| nitinkumar12@gmail.com | aadya |
		
		


#3. with Data tables
		
		#Scenario Outline: Login Test Scenario
		#
		#Given User already on login page 
		#	When title of login page is facebook 
		#	Then User enters username and password
		#| nitin.crush@gmail.com | golghar |
		#	Then user clicks on login button 
		#	Then user is on home page
		
		
		
		
		
	