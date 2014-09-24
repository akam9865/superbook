# create_table "teams", force: true do |t|
#   t.string   "name",       null: false
#   t.string   "city",       null: false
#   t.integer  "sport_id",   null: false
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end


class Team < ActiveRecord::Base
  belongs_to :sport

end
