# frozen_string_literal: true

json.post do
  json.partial! '/api/v1/posts/post', post: @post
end

json.partial! '/api/v1/categories/category', category: @post.category
