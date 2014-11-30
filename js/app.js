App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about',{path: '/about'});
		this.resource('aboutus',{path: '/about#aboutus'});
		this.resource('faq',{path: '/about#faq'});
		this.resource('location',{path: '/about#location'});
	this.resource('CaseStudies',{path: '/CaseStudies'});
		this.resource('albums',{path: '/CaseStudies/albums'});
		this.resource('picquity',{path: '/CaseStudies/picquity'});
	this.resource('getInTouch');
	this.resource('ideationSection',{path: '/ideationSection'});
	this.resource('caseStudiesAbout',{path: '/caseStudiesAbout'});
});

App.ApplicationController =  Ember.Controller.extend({
		 actions: {
		    getInTouch: function() {
		      this._super();
			$("html, body").animate({ scrollTop: $('#getInTouch').offset().top }, 1000);
		    }
		  }
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
	App.IndexController =  Ember.Controller.extend({
		 actions: {
		    learnMore: function() {
		      this._super();
			$("html, body").animate({ scrollTop: $('#ideation').offset().top }, 1000);
		    }
		  }
	});
		App.IndexView = Ember.View.extend({
		    templateName: 'index',
		    didInsertElement: function() {
		        this.$(".fade").fadeIn(2000);
		    }   
		});
		App.IdeationSectionRoute = Ember.Route.extend({
			renderTemplate: function(){
		  	this.render('index',{outlet: 'index'});
		  	this.render('ideationSection',{outlet: 'ideationSection'});
		  	this.render('platformSection',{outlet: 'platformSection'});
		  	this.render('featureSection',{outlet: 'featureSection'});
		  	this.render('getInTouch',{outlet: 'getInTouch'});
		  	this.render('clientSection',{outlet: 'clientSection'});
		  	this.render('freeLandingPage',{outlet: 'freeLandingPage'});
		  	this.render('achievementSection',{outlet: 'achievementSection'});
		  	},
		});
		App.GetInTouchRoute = Ember.Route.extend({
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
	App.CaseStudiesController = Ember.Controller.extend({
		actions: {
		    down: function() {
		      this._super();
			$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
		    }
		}	
	});
App.CaseStudiesAboutRoute = Ember.Route.extend({
		renderTemplate: function(){
	  	this.render('content',{outlet: 'content'});
	  	this.render('caseStudiesAbout',{outlet: 'caseStudiesAbout'});
	  	this.render('footer',{outlet: 'footer'});
	  	}
	});
	App.CaseStudiesAboutController = Ember.Controller.extend({
		actions: {
		    down: function() {
		      this._super();
			$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
		    }
		}	
	});
		App.AlbumsRoute = Ember.Route.extend({
			activate: function() {
			    document.title = "Case Study: The Albums| LaunchYard - We help build startups.";
			},
		  	renderTemplate: function() {
			  	this.render('albumContent', {outlet: 'albumContent'});
			    this.render('albumBody', {outlet: 'albumBody'});
			    this.render('albumFooter', {outlet: 'albumFooter'});
		  	}
		});
		App.PicquityRoute = Ember.Route.extend({
			activate: function() {
			    document.title = "Case Study: Picquity| LaunchYard - We help build startups.";
			},
		  renderTemplate: function() {
		  	this.render('picquityContent', {outlet: 'picquityContent'});
		    this.render('picquityBody', {outlet: 'picquityBody'});
		    this.render('picquityfooter', {outlet: 'picquityfooter'});
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