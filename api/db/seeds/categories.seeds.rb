# frozen_string_literal: true

puts 'Seeding categories.'

5.times do |i|
  Category.create(
    name: "Category ##{i + 1} theme.",
    description: "Here You can find Category # #{i + 1} posts."
  )
end
