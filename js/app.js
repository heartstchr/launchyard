App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('Case-studies');
	this.resource('getintouch');
	this.resource('ideationSection');

});

App.getintouchRoute = Ember.Route.extend({

	model: function(){
		return getintouch;
	}
});


