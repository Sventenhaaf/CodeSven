Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :show, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :snippets, only: [:create, :destroy, :index, :show, :update]
    resources :likes, only: [:new, :create, :destroy]
  end
end
