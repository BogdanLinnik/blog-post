# frozen_string_literal: true

json.id post.id
json.name post.name
json.content post.content
json.partial! '/api/v1/posts/file', post: post
