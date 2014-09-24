class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :username, null: false
      t.text :password_digest, null: false
      t.text :session_token, null: false
      t.decimal :bankroll, precision: 16, scale: 2

      t.timestamps
    end
  end
end
