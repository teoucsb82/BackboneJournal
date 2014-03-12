Journal::Application.routes.draw do
  root to: "posts#index"
  resources :posts, :only => [:index, :create, :destroy, :update, :show]
end
