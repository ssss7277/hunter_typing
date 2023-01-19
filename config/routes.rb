Rails.application.routes.draw do
  root to: 'game#play'
  get 'nomal_easy', to: 'game#nomal_easy'
  get 'nomal_medium', to: 'game#nomal_meidum'
  get 'nomal_hard', to: 'game#nomal_hard'
  get 'rank_easy', to: 'game#rank_easy'
  get 'rank_medium', to: 'game#rank_medium'
  get 'rank_hard', to: 'game#rank_hard'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
