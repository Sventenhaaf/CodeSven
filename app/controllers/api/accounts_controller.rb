class Api::AccountsController < ApplicationController
  def index
    @user = current_user
    if signed_in?
      render json: @user.username
    else
      render json: 'not logged in'
    end
  end
end
