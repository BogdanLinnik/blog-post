# frozen_string_literal: true

# This is categories model
class Post < ApplicationRecord
  VALID_NAME = /(?=^[A-Z][A-z]+(\.\s|\.\s.*|\s.*\s|\s)[A-z]{2,}(\.$|\.\s.*$|\s.*$|$))(?=.*\..*)/.freeze

  belongs_to :category
  has_many :comments, as: :commentable, dependent: :destroy
  has_one_attached :file, dependent: :destroy

  validates_presence_of :name
  validates_format_of :name, with: VALID_NAME
end
