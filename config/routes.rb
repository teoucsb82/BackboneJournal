Journal::Application.routes.draw do
  resources :posts, :only => [:index, :create, :destroy, :update]
end
