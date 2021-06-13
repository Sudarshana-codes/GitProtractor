describe('Protractor Project',function(){
	
	function selectItem(product)
	{
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(itemName){
				if(itemName==product)
					{
					item.element(by.css("button[class='btn btn-info']")).click();
					}
			})
		})
	}
	it('Submit form test case',function(){
		browser.manage().window().maximize();
		browser.get("http://rahulshettyacademy.com/angularpractice/");
		element(by.linkText("Shop")).click();
		selectItem("Samsung Note 8");
		selectItem("Nokia Edge");
		selectItem("Blackberry");
		element(by.css("a[class='nav-link btn btn-primary']")).click();
		browser.sleep(5000);
		var sum=0;
		element.all(by.css("table[class='table table-hover'] tbody tr td:nth-child(4) strong")).each(function(price)
		{
			price.getText().then(function(tPrice)
			{
				var p=tPrice.split(" ");
				sum=sum+Number(p[1]);
			})
		})

		element(by.css("h3 strong")).getText().then(function (total) {
            var txt = total.split(" ");
            var amt = Number(txt[1]);
            console.log("amt is " + txt[1] + " and total is " + sum)
            expect(amt).toBe(sum);
        })
        
       element.all(by.css("table[class='table table-hover'] tbody tr td[class='col-sm-8 col-md-6']")).count().then(function(numOfItems){
    	   console.log("Before removal "+numOfItems);
       })
       var beforeRemoval = element.all(by.css("table[class='table table-hover'] tbody tr td[class='col-sm-8 col-md-6']")).count();
       element(by.css("table[class='table table-hover'] tbody tr:nth-child(1) button")).click();
		element.all(by.css("table[class='table table-hover'] tbody tr td[class='col-sm-8 col-md-6']")).count().then(function(numOfItems){
	    	   console.log("After removal "+numOfItems);
	       })
	   var afterRemoval = element.all(by.css("table[class='table table-hover'] tbody tr td[class='col-sm-8 col-md-6']")).count();
	   expect(beforeRemoval).toBeGreaterThan(afterRemoval);
	})
})