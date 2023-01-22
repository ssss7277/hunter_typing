Rails.application.routes.draw do
  root to: 'game#home'
  get 'mode',to: 'game#mode'
  get 'explanation',to: 'game#explanation'
  get 'setting',to: 'game#setting'
  get 'play',to: 'game#play'
  get 'nomal_easy', to: 'game#nomal_easy'
  get 'nomal_medium', to: 'game#nomal_medium'
  get 'nomal_hard', to: 'game#nomal_hard'
  get 'rank_easy', to: 'game#rank_easy'
  get 'rank_medium', to: 'game#rank_medium'
  get 'rank_hard', to: 'game#rank_hard'
  get 'result', to: 'game#result'

  resources :scores, only: [:index, :new, :create]
  get 'level_1', to: 'scores#level_1'
  get 'level_2', to: 'scores#level_2'
  get 'level_3', to: 'scores#level_3'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
