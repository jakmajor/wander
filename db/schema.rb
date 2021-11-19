# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_19_184200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hiker_trails", force: :cascade do |t|
    t.bigint "hiker_id", null: false
    t.bigint "trail_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hiker_id"], name: "index_hiker_trails_on_hiker_id"
    t.index ["trail_id"], name: "index_hiker_trails_on_trail_id"
  end

  create_table "hikers", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "bio"
    t.string "image_url"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "parks", force: :cascade do |t|
    t.string "name"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
  end

  create_table "trails", force: :cascade do |t|
    t.string "name"
    t.integer "distance"
    t.string "difficulty"
    t.integer "elevation"
    t.integer "rating"
    t.string "type_of_hike"
    t.integer "lattitude"
    t.integer "longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "park_id"
    t.string "image_url"
  end

  add_foreign_key "hiker_trails", "hikers"
  add_foreign_key "hiker_trails", "trails"
end
