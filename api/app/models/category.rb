# frozen_string_literal: true

# This is categories model
class Category < ApplicationRecord
  has_many :posts
  has_many :comments, as: :commentable
end
