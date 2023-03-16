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
  image: "https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?w=996&t=st=1678978976~exp=1678979576~hmac=968160c4803a46597adc17f167a9ce3d1a0679aa94f92057207db8e73a5ea57a",
  author: "John Smith"
)

Blog.create!(
  title: "10 Tips for a Better Night's Sleep",
  description: "Getting enough sleep is essential for good health. Here are 10 tips to help you sleep better.",
  image: "https://img.freepik.com/free-photo/social-media-networking-online-communication-connect-concept_53876-124862.jpg?w=740&t=st=1678979006~exp=1678979606~hmac=3e023032a8ca53095613adf8964682f9324d0cf673c6143fc343be7259968cd3",
  author: "Jane Doe"
)

Blog.create!(
  title: "Why You Should Travel Alone At Least Once In Your Life",
  description: "Traveling alone can be a life-changing experience. Here's why you should give it a try.",
  image: "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?w=740&t=st=1678979041~exp=1678979641~hmac=3a3b52a00dc465a366ac288e0b9625b0b813442732e0172b5def42e76fbc6ec7",
  author: "Robert Johnson"
)