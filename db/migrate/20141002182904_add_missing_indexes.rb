class AddMissingIndexes < ActiveRecord::Migration
  def change
    add_index :bets, :user_id
    add_index :bets, :game_id
    add_index :bets, :team_id
  end
end