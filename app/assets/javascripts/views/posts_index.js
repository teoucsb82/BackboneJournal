window.Journal.Views.PostsIndex = Backbone.View.extend({
	template: JST["posts/index"],

	render: function() {
		// var view = this;
//
// 		this.$el.empty();
// 		var $ul = $('<ul></ul>');
//
//
// 		(Journal.Models.Post.all).each(function (post) {
// 			var $li = $('<li></li>');
// 			$li.text(post.escape("title"));
//
// 			$ul.append($li);
// 		});



		this.$el.html(this.template({posts: this.collection}));
		return this;
	}
})