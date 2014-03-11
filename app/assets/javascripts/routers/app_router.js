window.Journal.Routers.AppRouter = Backbone.Router.extend({
	// Alternative to storing collection
	// initialize: function (){
	// 	this.posts = new Journal.Collections.Posts();
	// },

	routes: {
		"" : "postsIndex",
		"posts/:id" : "postsShow"
	},

	postsIndex: function() {
		var posts = Journal.Data.posts;
		posts.fetch();
		var postsView = new Journal.Views.PostsIndex({ collection: posts });
		this._swapView(postsView);
	},

	postsShow: function(id) {
		var post = Journal.Data.posts.get(id);
		var postView = new Journal.Views.PostsShow({ model: post });
		this._swapView(postView);
	},

	_swapView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;

		$('#content').html(view.render().$el);
	}
});

