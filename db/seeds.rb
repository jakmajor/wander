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
    state: "California",
    image_url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80", 
    bio: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.

    First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.", 
    est: "1890", 
    clout_factor: "", 
    annual_visitors: ""
  },
  {
    name: "Zion National Park",
    state: "Utah",
    image_url: "https://images.unsplash.com/photo-1628112602640-2d529ef223c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3613&q=80",
    bio: "Located in southwestern Utah, 43 miles east of St. George, Zion National Park is Utah’s oldest and most visited national park, annually hosting an average of 4.5 million visitors. The park’s main attraction is Zion Canyon, at its south end, which exhibits stunning rock monoliths and eroded canyon walls cut by the Virgin River over time.

    Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures. ", 
    est: "1919", 
    clout_factor: "", 
    annual_visitors: ""
  },
  {
    name: "Joshua Tree National Park",
    state: "California",
    image_url: "https://images.unsplash.com/photo-1581293738298-451cd74b0b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    bio: "Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. Hiking trails weave through the boulders of Hidden Valley.", 
    est: "1994", 
    clout_factor: "", 
    annual_visitors: ""
  }
])

puts "🗺️ 🧭 Seeding trails..."
Trail.create!([
  {
    name: "Half Dome Hike",
    distance: "15",
    difficulty: "Difficult",
    elevation: "8839",
    type_of_hike: "Out & back",
    rating: "5",
    lattitude: "37.745374256529466",
    longitude: "-119.51272296001964", 
    image_url: "https://californiathroughmylens.com/wp-content/uploads/2016/07/stargazing-glacier-point-3.jpg",
    park_id: 1
  },
  {
    name: "Vernal and Nevada Falls",
    distance: "1.5-5.4",
    difficulty: "Moderate",
    elevation: "400 2000",
    type_of_hike: "Out & back",
    rating: "5",
    image_url: "https://www.myyosemitepark.com/wp-content/uploads/2015/05/yt-mist-trail-vernal-fall_dollar_680.jpg?width=730",
    lattitude: "37.727926143824924",
    longitude: "-119.5490617564217", 
    park_id: 1
  },
  {
    name: "Lower Yosemite Falls",
    distance: "1",
    difficulty: "Easy",
    elevation: "50",
    type_of_hike: "Loop",
    rating: "5",
    image_url: "https://www.americansouthwest.net/california/photographs700/lower.jpg",
    lattitude: "37.7466149856493",
    longitude: "-119.59622714467852", 
    park_id: 1
  },
  {
    name: "Upper Yosemite Falls",
    distance: "7.6",
    difficulty: "Difficult",
    elevation: "2600",
    type_of_hike: "Out & back",
    rating: "5",
    image_url: "https://cdn2.apstatic.com/photos/hike/7004881_medium_1554310989.jpg",
    lattitude: "37.73834142511535",
    longitude: "-119.60827070557676", 
    park_id: 1
  },
  {
    name: "Inspiration Point",
    distance: "2.6",
    difficulty: "Moderate",
    elevation: "1000",
    type_of_hike: "Out & back",
    rating: "5",
    image_url: "https://modernhiker-storage.s3.amazonaws.com/modernhiker/wp-content/uploads/2019/07/Inspiration-and-Artists-Points-4-1030x580.jpg",
    lattitude: "37.71672285973264",
    longitude: "-119.67770890209971", 
    park_id: 1
  },
  {
    name: "Angel's Landing",
    distance: 5,
    difficulty: "Difficult",
    elevation: 5790,
    type_of_hike: "Out & back",
    rating: "4",
    lattitude: "37.25992454634612",
    longitude: "-112.95119020679748",
    image_url: "https://www.thewholeworldisaplayground.com/wp-content/uploads/2020/05/Angels-Landing-Hike-Zion-National-Park-21.webp",
    park_id: 2
  },
  {
    name: "The Narrows (bottom up)",
    distance: 9.4,
    difficulty: "Difficult",
    elevation: 334,
    type_of_hike: "Out & back",
    rating: 5,
    image_url: "https://bearfoottheory.com/wp-content/uploads/2019/02/Zion-Narrows-Best-Hikes-in-Utah.jpeg",
    lattitude: "37.30521174882055",
    longitude: "-112.94916549969155",
    park_id: 2

  },
  {
    name: "Grotto Trail",
    distance: 1,
    difficulty: "Easy",
    elevation: 35,
    type_of_hike: "Out & back",
    rating: 5,
    image_url: "https://www.citrusmilo.com/zion2015/joebraun_grottotrail05.jpg",
    lattitude: "37.25892648698974",
    longitude: "-112.9513321283305",
    park_id: 2

  },
  {
    name: "Watchman trail",
    distance: 3.3,
    difficulty: "Moderate",
    elevation: 368,
    type_of_hike: "Out & back",
    rating: "5",
    image_url: "https://media.deseretdigital.com/file/9cd56a2574?crop%3Dtop%3A0%7Cleft%3A0%7Cwidth%3A620%7Cheight%3A330%7Cgravity%3ACenter%26quality%3D55%26interlace%3Dnone%26resize%3Dwidth%3A620%26order%3Dresize%2Ccrop%26c%3D14%26a%3D0fab10fb",
    lattitude: "37.20153972996445",
    longitude: "-112.97909633308277", 
    park_id: 2

  },
  {
    name: "Skull Rock Discovery Trail",
    distance: "1",
    difficulty: "easy",
    elevation: "79",
    type_of_hike: "Loop",
    rating: "4",
    lattitude: "34.008167811563894",
    longitude: "-116.05947428913214",
    image_url: "https://www.nps.gov/jotr/learn/nature/images/12489691874_b5bbfaa7e3_k.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
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