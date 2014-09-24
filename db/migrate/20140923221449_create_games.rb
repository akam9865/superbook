class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :team1_id, null: false
      t.integer :team2_id, null: false
      t.integer :day_id, null: false
      t.integer :odds, null: false
      t.integer :winner_id

      t.timestamps
    end
    add_index :games, :team1_id
    add_index :games, :team2_id
    add_index :games, :day_id
  end
end
