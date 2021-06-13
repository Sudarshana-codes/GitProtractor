describe('Protractor Frame steps',function() {  


	it('Open NonAngular js website Alerts',function() {
	
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		browser.get("http://qaclickacademy.com/practice.php");
		browser.switchTo().frame(0);
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
		
		
	
	})

})




