# frozen_string_literal: true

json.comments @comments do |comment|
  json.partial! '/api/v1/comments/comment', comment: comment
end