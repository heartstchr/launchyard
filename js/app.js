App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about',{path: '/about'});
	this.resource('Case-studies',{path: '/Case-studies'});
	this.resource('getintouch');
	this.resource('ideationSection',{path: 'ideationSection'});
});


App.IndexRoute = Ember.Route.extend({
	actions:{
		learnMore: function(){
			this._super();
			window.location = "#ideation"
		}
	}	
});

App.CaseStudiesRoute = Ember.Route.extend({
	actions:{
		down: function(){
			this._super();
			window.location = "#down"
		}
	}	
});

App.IndexController = Ember.Controller.extend({
	title: 'We help build startups.' 
});


App.getintouchRoute = Ember.Route.extend({

	model: function(){
		return getintouch;
	}
});


