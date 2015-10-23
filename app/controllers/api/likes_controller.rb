class Api::LikesController < ApplicationController
  def new
    @like = Like.new
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render json: @like
    end
  end

  def destroy
    like = Like.find(params[:like_id])
    temp = like.dup
    if like.destroy
      render json: temp
    end
  end

  def like_params
    params.require(:like).permit(:snippet_id)
  end
end
