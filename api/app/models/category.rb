# frozen_string_literal: true

# This is categories model
class Category < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy
end
