class Game < ActiveRecord::Base
  belongs_to(
    :team1,
    class_name: "Team",
    foreign_key: :team1_id,
    primary_key: :id
  )
  
  belongs_to(
    :team2,
    class_name: "Team",
    foreign_key: :team2_id,
    primary_key: :id
  )

  belongs_to :day
  has_one :sport, through: :team1, source: :sport
  
  def simulate
    self.winner_id = rand < self.odds ? self.team2_id : self.team1_id
    self.save
  end
end
