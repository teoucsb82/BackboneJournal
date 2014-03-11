window.Journal.Views.PostsIndex = Backbone.View.extend({
	template: JST["posts/index"],

	initialize: function() {
		this.listenTo(this.collection, "remove add change:title reset", this.render);
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

	add: function(event) {
		alert("ADD");
	}
})