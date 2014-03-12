window.Journal.Models.Post = Backbone.Model.extend({
	url: 'posts/',

	sync: function(method, model, options) {
		options = options || {};
		if (method.toLowerCase() === "delete") {
			options.url = "posts/" + this.get("id");
		}

		return Backbone.sync.apply(this, arguments);
	}
});