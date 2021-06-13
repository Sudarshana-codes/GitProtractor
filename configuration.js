var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec2.js'],
//  capabilities: {
//	  'browserName': 'firefox',
//	  'browserName': 'internet explorer',
//	  'browserName': 'chrome'
//	},
	jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	  },
	suites: {
		Regression:['ChainLocators.js','Alert.js'],
		Smoke: 'spec2.js'
	  },
	onPrepare: function()
	{
		browser.manage().window().maximize();
		jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
	}
};