Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/search', to: 'search#index'
  get 'api/reviews', to: 'search#show'

end
