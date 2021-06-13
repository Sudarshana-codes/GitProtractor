function Car(){
	this.firstbox=element(by.model('first'));
	this.secondbox=element(by.model('second'));
	this.go=element(by.id('gobutton'));
	this.result=element(by.css("h2.ng-binding"));
	this.color="red";
	this.engine="turbo";
	this.brand="bmw";
	
	this.getURL=function()
	{
		browser.get("http://juliemr.github.io/protractor-demo/");
	};
};

module.exports=new Car();

//var c=new Car();
/*c.getModel();
console.log(c.brand);*/