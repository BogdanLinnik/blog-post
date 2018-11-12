# frozen_string_literal: true

# This is model for posts and categories comments
class Comment < ApplicationRecord
  VALID_AUTHOR = /(?=^[A-Z][A-z]+(\.\s|\.\s.*|\s.*\s|\s)[A-Z][A-z]+(\.$|\.\s.*$|\s.*$|$))(?=.*\..*)/.freeze
  belongs_to :commentable, polymorphic: true

  validates_presence_of :author, :content
  validates_format_of :author, with: VALID_AUTHOR
end
