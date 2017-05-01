Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'my_music_playlist#index', as: 'my_music_playlist'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :playlists do
    resources :songs
  end

  resources :songs


end
