App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about',{path: '/about'});
	this.resource('Case-studies',{path: '/Case-studies'});
	this.resource('getInTouch');
	this.resource('ideationSection',{path: 'ideationSection'});
	this.resource('caseStudiesAbout',{path: 'caseStudiesAbout'});
});

App.IndexRoute = Ember.Route.extend({
	activate: function() {
	    document.title = "We help build startups.";
	},
	renderTemplate: function(){
  	this.render('index',{outlet: 'index'});
  	this.render('ideationSection',{outlet: 'ideationSection'});
  	this.render('platformSection',{outlet: 'platformSection'});
  	this.render('featureSection',{outlet: 'featureSection'});
  	this.render('getInTouch',{outlet: 'getInTouch'});
  	this.render('clientSection',{outlet: 'clientSection'});
  	this.render('freeLandingPage',{outlet: 'freeLandingPage'});
  	this.render('achievementSection',{outlet: 'achievementSection'});
  }	
});

App.CaseStudiesRoute = Ember.Route.extend({
	activate: function() {
	    document.title = "Case Studies | LaunchYard - We help build startups.";
	},
	renderTemplate: function(){
  	this.render('content',{outlet: 'content'});
  	this.render('caseStudiesAbout',{outlet: 'caseStudiesAbout'});
  	this.render('footer',{outlet: 'footer'});
  	}
});

App.AboutRoute = Ember.Route.extend({
	activate: function() {
	    document.title = "About us | LaunchYard - We help launch startups.";
	},
	renderTemplate: function(){
  	this.render('about',{outlet: 'about'});
  	this.render('peopleSection',{outlet: 'peopleSection'});
  	this.render('faqSection',{outlet: 'faqSection'});
  	this.render('locationSection',{outlet: 'locationSection'});
  	this.render('footer',{outlet:'footer'});
  	}
});

App.IndexController = Ember.Controller.extend({
	actions:{
		ideationSection: function(){
			this._super();
    		window.location = "#ideationSection";
		} 
	}
});


App.GetInTouchRoute = Ember.Route.extend({

	actions:{
		getInTouch: function(){
			this._super();
			window.location = "#getInTouch"
		}
	}
});


