describe('All demo',function(){
	
	it('Test case 1',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model('first')).sendKeys('4');
		element(by.model('second')).sendKeys('8');
		element(by.id('gobutton')).click();
		
		element(by.model('first')).sendKeys('1');
		element(by.model('second')).sendKeys('5');
		element(by.id('gobutton')).click();
		
		element(by.model('first')).sendKeys('9');
		element(by.model('second')).sendKeys('4');
		element(by.id('gobutton')).click();

		element.all(by.repeater('result in memory')).count().then(function(n){
			console.log(n);
		})
		var total = element.all(by.repeater('result in memory')).count();
		
		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				console.log(text);
			})
		})
		
		
			/*element.all(by.repeater('result in memory')).get(2)
			.element(by.css('td:nth-child(3)')).getText().then(function(t){
				console.log(t);
			})*/
			
	})
})