Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'api/show', to: 'greads#show'
  get 'api/search', to: 'greads#index'
end
