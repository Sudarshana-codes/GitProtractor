describe('Protractor Synchronization steps',function() {  


	it('Open NonAngular js website Alerts',function() {
	
		browser.waitForAngularEnabled(false);
//		browser.manage().window().maximize();
		browser.get("https://www.itgeared.com/demo/1506-ajax-loading.html");
		
		element(by.css("a[href*='loadAjax']")).click();
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id('loader'))),8000);
		element(by.id('results')).getText().then(function(text){
			
			console.log(text);
		})
		
	
	})

})




