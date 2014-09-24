class OddsToFloat < ActiveRecord::Migration
  def change
    change_column :games, :odds, :float
  end
end
