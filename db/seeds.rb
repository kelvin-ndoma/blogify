# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Blog.create!(
  title: "My First Blog Post",
  description: "This is my first blog post. I'm excited to start blogging!",
  image: "./images/pic1.jpg",
  author: "John Smith"
)

Blog.create!(
  title: "10 Tips for a Better Night's Sleep",
  description: "Getting enough sleep is essential for good health. Here are 10 tips to help you sleep better.",
  image: "./images/pic2.jpg",
  author: "Jane Doe"
)

Blog.create!(
  title: "Why You Should Travel Alone At Least Once In Your Life",
  description: "Traveling alone can be a life-changing experience. Here's why you should give it a try.",
  image: "./images/pic3.jpg",
  author: "Robert Johnson"
)