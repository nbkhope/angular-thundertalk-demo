# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.delete_all

posts = [
    "I can't remember what I did yesterday",
    "I only saw stars last night",
    "Where am I right now? I cannot figure out."
]

posts.each do |post|
  Post.create(
    content: post,
    upvotes: 0
  )
end
