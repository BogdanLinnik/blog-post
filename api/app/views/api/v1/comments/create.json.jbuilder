# frozen_string_literal: true

json.comment do
  json.partial! '/api/v1/comments/comment', comment: @comment
end
