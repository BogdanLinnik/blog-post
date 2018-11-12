# frozen_string_literal: true

# This is categories model
class Category < ApplicationRecord
  VALID_NAME = /(?=^[A-Z][A-z]+(\.\s|\.\s.*|\s.*\s|\s)[A-z]{2,}(\.$|\.\s.*$|\s.*$|$))(?=.*\..*)/.freeze

  has_many :posts, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy

  validates_presence_of :name
  validates_format_of :name, with: VALID_NAME
end
