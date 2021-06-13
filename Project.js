describe('Protractor Project',function(){
	
	function selectItem(product)
	{
		element.all(by.css("app-card[class='col-lg-3 col-md-6 mb-3']")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(itemName){
				if(itemName==product)
					{
					element(by.buttonText("Add")).click();
					
					}
			})
		})
	}
	it('Submit form test case',function(){
		browser.manage().window().maximize();
		browser.get("http://rahulshettyacademy.com/angularpractice/");
		element(by.css("a[class='navbar-brand']")).click();
		element(by.name("name")).sendKeys("Sudarshana");
		element(by.css("input[name='email']")).sendKeys("abc@yee.com");
		element(by.id("exampleInputPassword1")).sendKeys("1234");
		element(by.id("exampleCheck1")).click();
		element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.css("input[name='inlineRadioOptions']")).get(1).click();
		element(by.css("input[name='bday']")).sendKeys("05-02-1996");
		element(by.buttonText("Submit")).click().then(function()
				{
			element(by.css("div[class*='alert-success']")).getText().then(function(text)
					{
				console.log(text);
			})
		});
		
		//*********************************************************	
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("a").then(function()
				{
				element(by.css("div[class='alert alert-danger']")).getText().then(function(errortext)
						{
						expect(errortext).toBe("Name should be at least 2 characters");
						})
				})
				
		//*********************************************************		
		element(by.linkText("Shop")).click();
		selectItem("Samsung Note 8");
		selectItem("Nokia Edge");
		element(by.css("a[class='nav-link btn btn-primary']")).getText().then(function(checkOutText){
			var numItem = checkOutText.split("(");
			var x=Number(numItem[1].trim().charAt(0));
			var y=x+1;
			console.log(y);
			expect(3).toBe(y);
		})
		
	})
})