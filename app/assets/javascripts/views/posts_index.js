window.Journal.Views.PostsIndex = Backbone.View.extend({
	template: JST["posts/index"],

	initialize: function() {
		this.listenTo(Journal.Data.posts, "remove add reset change", this.render);
	},

	render: function() {
		this.$el.html(this.template({posts: this.collection}));
		return this;
	},

	events: {
		"click button.delete" : "destroyPost"
	},

	destroyPost: function(event) {
		var id = $(event.currentTarget).data('id');
		this.collection.get(id).destroy();
	},


})