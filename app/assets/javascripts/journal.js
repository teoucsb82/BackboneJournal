window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Data: {},

  initialize: function() {
		//Ryan's style -- better than CJ's
		Journal.Data.posts = new Journal.Collections.Posts();

    // just sets up the routes
    new Journal.Routers.AppRouter();

    // start listening to changes to the location
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
