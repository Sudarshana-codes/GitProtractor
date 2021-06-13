describe('Add function reuse demo',function(){
	
	function Add(a,b)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	}
	
	it('Test case',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		Add(1,4);
		Add(2,5);
		Add(3,6);
		Add(4,7);
		Add(5,8);
		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				console.log(text);
			})
		})
	})
})