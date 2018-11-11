# frozen_string_literal: true

puts 'Seeding posts.'
after :categories do
  20.times do |i|
    Post.create(
      name: "Post on ##{i + 1} theme.",
      content: "Here You can read post ##{i + 1}.",
      category_id: ((i + 1).to_f / 4).ceil
    )
  end
end
