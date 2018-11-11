# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories, except: %i[edit]
      resources :posts, except: %i[index edit]
      resources :comments, only: [:create] do
        collection do
          post :list, to: 'comments#show'
        end
      end
    end
  end
end
