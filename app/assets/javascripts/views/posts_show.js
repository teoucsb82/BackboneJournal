window.Journal.Views.PostsShow = Backbone.View.extend({
	template: JST["posts/show"],

	render: function() {
		var renderedContent = this.template({post: this.model});
		this.$el.html(renderedContent);
		return this;
	}
});