# frozen_string_literal: true

# This is model for posts and categories comments
class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
end
