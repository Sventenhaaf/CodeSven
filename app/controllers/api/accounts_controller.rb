class Api::AccountsController < ApplicationController
  def index
    @user = current_user
    if signed_in?
      render json: @user.username
    else
      render json: 'not logged in'
    end
  end

  def create
    # debugger
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render json: user.username
    else
      flash.now[:errors] = ["invalid combination of username and password"]
      render :new
    end
  end
end
