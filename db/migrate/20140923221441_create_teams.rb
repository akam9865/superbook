class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.integer :sport_id, null: false
      
      t.timestamps
    end
    add_index :teams, :sport_id
  end
end
