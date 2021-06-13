describe('Chain Locators demo',function(){
	
	it('Test case 1',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model('first')).sendKeys('4');
		element(by.model('operator')).element(by.css("option:nth-child(2)")).click();
		element(by.model('second')).sendKeys('8');
		element(by.id('gobutton')).click();
		element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
			console.log(text);
		})
	})
})