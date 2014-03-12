window.Journal.Views.PostsNew = Backbone.View.extend({

	template: JST["posts/new"],

	events: {
		"submit form": "submit"
	},

	submit: function(event) {
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON()['post'];
		this.model.set(params);
		console.log("model.params", this.model)
		this.model.save({}, {
			success: function() {
				Backbone.history.navigate('#/', true);
			},
			error: function(error) {
				alert("Invalid form!");
			}
		});

	},

	render: function() {
		var renderedContent = this.template({ post: this.model });
		this.$el.html(renderedContent);
		return this;
	}

})