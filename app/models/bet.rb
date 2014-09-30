class Bet < ActiveRecord::Base

  validates :amount, numericality: { greater_than: 0 }
  validate :enough_money
  
  belongs_to :user
  belongs_to :game
  belongs_to :team
  
  def enough_money  
    if self.user.bankroll < self.amount
      errors.add(:bankroll, "not enough cash, homie")
    end
  end

  
end
