json.array! @games do |game|

   json.extract! game, :id, :team1, :team2, :day_id, :odds, :winner_id
   
   # json.games sport.games do |game|
   #   json.extract! game, :id, :team1_id, :team2_id, :day_id, :odds, :winner_id
   # end
   
   # json.games games.teams do |team|
   #   json.team1 game.team1
   #   json.team2 game.team2
   #   json.day game.day
   #  end

end