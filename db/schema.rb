# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140926163830) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bets", force: true do |t|
    t.decimal "amount",  precision: 16, scale: 2
    t.integer "game_id"
    t.integer "team_id"
    t.integer "user_id"
  end

  create_table "days", force: true do |t|
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "days", ["user_id"], name: "index_days_on_user_id", using: :btree

  create_table "games", force: true do |t|
    t.integer  "team1_id",   null: false
    t.integer  "team2_id",   null: false
    t.integer  "day_id",     null: false
    t.float    "odds",       null: false
    t.integer  "winner_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "sport_id"
  end

  add_index "games", ["day_id"], name: "index_games_on_day_id", using: :btree
  add_index "games", ["team1_id"], name: "index_games_on_team1_id", using: :btree
  add_index "games", ["team2_id"], name: "index_games_on_team2_id", using: :btree

  create_table "sports", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teams", force: true do |t|
    t.string   "name",       null: false
    t.string   "city",       null: false
    t.integer  "sport_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "teams", ["sport_id"], name: "index_teams_on_sport_id", using: :btree

  create_table "users", force: true do |t|
    t.text     "username",                                 null: false
    t.text     "password_digest",                          null: false
    t.text     "session_token",                            null: false
    t.decimal  "bankroll",        precision: 16, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
