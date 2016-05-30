class PostsController < ApplicationController
  def index
  end

  def create
  end

  def show
  end

  def upvote
  end

  private

  def post_params
    params.require(:post).permit(:content).merge(:upvotes: 0)
  end
end
