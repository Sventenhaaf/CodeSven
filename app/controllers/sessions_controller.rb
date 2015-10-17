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
      redirect_to "/"
    else
      flash.now[:errors] = ["invalid combination of username and password"]
      render :new
    end
  end

  def show
    render json: current_user.username
  end

  def destroy
    # debugger
    sign_out
    render json: "logged out"
  end
end
