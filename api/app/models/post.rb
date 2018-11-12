# frozen_string_literal: true

# This is categories model
class Post < ApplicationRecord
  belongs_to :category
  has_many :comments, as: :commentable, dependent: :destroy
  has_one_attached :file, dependent: :destroy
end
