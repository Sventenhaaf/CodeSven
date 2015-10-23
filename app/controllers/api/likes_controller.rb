class Api::LikesController < ApplicationController
  def new
    @like = Like.new
  end

  def create
    @like = Like.new(snippet_params)
    @like.user_id = current_user.id
    if @like.save
      render json: @Like
    end
  end

  def destroy
    like = Like.find(params[:snippet_id], current_user_id)
    if like.destroy
      render json: {"deleted"}
    end
  end

  def like_params
    params.require(:like).permit(:snippet_id)
  end
end
