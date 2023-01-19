Rails.application.routes.draw do
  root to: 'game#play'
  get 'nomal_easy', to: 'game#nomal_easy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
