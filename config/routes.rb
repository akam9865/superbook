Superbook::Application.routes.draw do
  
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]


  namespace :api, defaults: { format: :json } do
    resources :sports, except: [:new, :edit]
    resources :games, except: [:new, :edit]
    resources :bets
    resources :users, only: [:show, :index]
  end
end
