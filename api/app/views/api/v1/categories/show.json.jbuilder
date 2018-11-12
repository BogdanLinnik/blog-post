# frozen_string_literal: true

json.partial! '/api/v1/categories/category', category: @category

json.posts @category.posts.order(updated_at: :desc) do |post|
  json.partial! '/api/v1/posts/post', post: post
end
