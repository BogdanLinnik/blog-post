# frozen_string_literal: true

json.categories categories do |category|
  json.partial! '/api/v1/categories/category_params', category: category
end
