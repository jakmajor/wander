Rails.application.routes.draw do
  resources :hiker_trails, only: [:destroy, :create]
  resources :hikers, only: [:index, :show]
  resources :trails, only: [:index, :show]
  resources :parks, only: [:index, :show]

  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
