describe('Protractor element',function(){
	var obj = require("./JavascriptDemo.js");
	var ob = require("./data.js");
	var using = require('jasmine-data-provider')
	
	beforeEach(function() {
		obj.getURL();
	  });
	
	using(ob.dataDrive,function(data, description){ //description : firstdataset(sub object name)
		//, data : firstInput(actual data)
		
	it('Test case 1 '+description,function(){
		
		obj.firstbox.sendKeys(data.firstInput);
		obj.secondbox.sendKeys(data.secondInput);
		obj.go.click();
		var r=obj.result.getText();
		expect(r).toBe(data.result);
//		var el=element(by.model('first'));
//		el.sendKeys('3');
//		browser.sleep(10000);
//		element(by.model('operator')).click();
//		element(by.css("select option[value='MULTIPLICATION']")).click();
//		element(by.model('second')).sendKeys('8');
//		element(by.id('gobutton')).click();
//		element(by.css("h2.ng-binding")).getText().then(function(result){
//			console.log(result);
//		})
		
		//Assertions
//		var result=element(by.css("h2.ng-binding")).getText();
//		expect(result).toBe('24');
//		browser.sleep(10000);
	})
	})
	
	 afterEach(function() {
		   console.log("Test is completed");
		  });
})