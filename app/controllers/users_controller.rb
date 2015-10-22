class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: {"username" => @user.username}
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: { "errorcode" => @user.errors.full_messages }
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
