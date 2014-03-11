class PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end

