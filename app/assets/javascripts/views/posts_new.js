window.Journal.Views.PostsNew = Backbone.View.extend({

	// initialize: function() {
	// 	this.listenTo(Journal.Data.posts, "add", this.render);
	// },

	template: JST["posts/new"],

	events: {
		"submit form": "submit"
	},

	submit: function(event) {
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON()['post'];

		var goHome = { success: function () {
    	Backbone.history.navigate('#/post', true);
    }};

		if(this.model.isNew()) {
      window.Journal.Data.posts.create(params, goHome);
		} else {
			this.model.save(params, goHome)
		}
	},

	render: function() {
		var renderedContent = this.template({ post: this.model });
		(this.$el).html(renderedContent);
		return this;
	},


})