# frozen_string_literal: true

# This is categories model
class Post < ApplicationRecord
  belongs_to :category
  has_many :comments, as: :commentable
  has_one_attached :file

  def attached_file
    file.attachment&.service_url
  end
end
