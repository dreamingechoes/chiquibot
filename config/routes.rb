Rails.application.routes.draw do
  get 'ask_chiquito', to: 'application#ask_chiquito'

  root to: 'application#index'
end
