class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      sign_in(user)
      render json: {"username" => user.username}
    else
      flash.now[:errors] = ["Invalid combination of username and password"]
      render json: {"errorcode" => "Invalid combination of username and password"}
    end
  end

  def show
    render json: current_user.username
  end

  def destroy
    sign_out
    render json: {"username" => ""}
  end
end
