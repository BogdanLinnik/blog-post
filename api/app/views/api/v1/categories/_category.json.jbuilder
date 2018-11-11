# frozen_string_literal: true

json.category do
  json.partial! '/api/v1/categories/category_params', category: category
end
