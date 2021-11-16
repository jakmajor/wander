# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📍🏕️ Seeding parks..."
Park.create!([
  {
    name: "Yosemite National Park",
    state: "California"
  },
  {
    name: "Zion National Park",
    state: "Utah"
  },
  {
    name: "Joshua Tree National Park",
    state: "California"
  }
])

puts "🗺️ 🧭 Seeding trails..."
Trail.create!([
  {
    name: "Half Dome Hike",
    distance: "15",
    difficulty: "Difficult",
    elevation: "8,839",
    type_of_hike: "Out & back",
    rating: "5",
    lattitude: "37.7452",
    longitude: "119.5127", 
    park_id: 1
  },
  {
    name: "Angel's Landing",
    distance: "5",
    difficulty: "Difficult",
    elevation: "5,790",
    type_of_hike: "Out & back",
    rating: "4",
    lattitude: "37.272204",
    longitude: "-112.950218",
    park_id: 2
  },
  {
    name: "Skull Rock Discovery Trail",
    distance: "1",
    difficulty: "easy",
    elevation: "79",
    type_of_hike: "Loop",
    rating: "4",
    lattitude: "33.997832",
    longitude: "-116.059800",
    park_id: 3
  }
])

puts "🥾🏔️ Seeding hikers..."
Hiker.create!([
  {
    name: "Amie",
    username: "amiefoster",
    bio: "I love hikes!",
    image_url: "https://media-exp1.licdn.com/dms/image/C5603AQHPJYz2Vn6kzg/profile-displayphoto-shrink_800_800/0/1631314484075?e=1642636800&v=beta&t=2BXDm6yi3O3irzBdPxWJWmhMvuuAOT4vxVl1cW5cOUc",
    password: "123"
  },
  {
    name: "Jak",
    username: "jakmajor",
    bio: "i like code and cats",
    image_url: "https://avatars.githubusercontent.com/u/66277064?v=4",
    password: "345"
  },
  {
    name: "Agnes",
    username: "agnesthebulldog",
    bio: "i hike in a wagon",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fagnesbulldog&psig=AOvVaw0Qj6dLOxowyqnJ0CLDb5zp&ust=1637176157484000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLD0kM7KnfQCFQAAAAAdAAAAABAD",
    password: "890" 
  }
])

puts "🏞 🏜️ Seeding HikerTrails..."
HikerTrail.create!([
  {
    hiker_id: 1,
    trail_id: 3
  },
  {
    hiker_id: 2,
    trail_id: 1
  },
  {
    hiker_id: 1,
    trail_id: 2
  }
])