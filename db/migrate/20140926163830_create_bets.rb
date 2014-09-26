class CreateBets < ActiveRecord::Migration
  def change
    create_table :bets do |t|
      t.decimal :amount, precision: 16, scale: 2
      t.integer :game_id
      t.integer :team_id
      t.integer :user_id
    end
  end
end
