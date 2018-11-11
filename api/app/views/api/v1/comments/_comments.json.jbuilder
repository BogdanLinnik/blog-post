# frozen_string_literal: true

json.comments commentable.comments do |comment|
  json.partial! '/api/v1/comments/comment', comment: comment
end
