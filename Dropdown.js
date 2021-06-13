describe('Dropdown demo',function(){
	
	function Calculate(a,b,c)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		element.all(by.tagName('option')).each(function(item)
			{
			item.getAttribute("value").then(function(values)
			{
				if(values==c)
					{
					item.click();
					}
			})
		})
		element(by.id('gobutton')).click();
	}
	
	it('Test case',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		Calculate(10,20,"MULTIPLICATION");
		Calculate(10,20,"ADDITION");
		Calculate(80,20,"SUBTRACTION");
		Calculate(10,20,"DIVISION");
		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				console.log(text);
			})
		})
	})
})