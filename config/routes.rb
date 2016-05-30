Rails.application.routes.draw do
  # Define the home page
  root to: 'application#angular'

  resources :posts do
    # Using member makes the route use :id instead of :post_id (/posts/:id/upvote)
    member do
      put '/upvote' => 'posts#upvote'
    end
  end
end
