describe('Protractor baby steps', function(){
	
	
	it('Test case 1',function(){
		browser.get("https://angularjs.org");
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			console.log("I am the last to execute");
		})
//		browser.sleep(9000);
//		console.log("I am the last to execute");
		
	})
	
	it('Test case 2',function(){
		
	})
	
})