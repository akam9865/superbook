class Bet < ActiveRecord::Base

  validates :amount, numericality: { greater_than: 0 }
  
  belongs_to :user
  belongs_to :game
  belongs_to :team
end
