class AddWinAmt < ActiveRecord::Migration
  def change
    add_column :bets, :to_win, :decimal, precision: 16, scale: 2
    add_column :bets, :result, :string
  end
end
