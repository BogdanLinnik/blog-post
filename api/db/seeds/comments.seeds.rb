# frozen_string_literal: true

after :posts do
  puts 'Seeding categories comments.'
  Category.all.each do |category|
    5.times do |i|
      Comment.create(
        author: "Author Name ##{i + 1}",
        content: "Some comment ##{i + 1}",
        commentable_id: category.id,
        commentable_type: 'Category'
      )
    end
  end

  puts 'Seeding posts comments.'
  Post.all.each do |post|
    5.times do |i|
      Comment.new(
        author: "Author Name ##{i + 1}.",
        content: "Some comment ##{i + 1}.",
        commentable_id: post.id,
        commentable_type: 'Post'
      )
    end
  end
end
