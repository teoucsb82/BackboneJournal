window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
		var posts = new Journal.Collections.Posts();
		posts.fetch({
			success: function (posts) {
				var postsView = new Journal.Views.PostsIndex({collection: posts});
				$('#content').append(postsView.render().$el);
			}
		})
  }
};

$(document).ready(function(){
  Journal.initialize();
});
