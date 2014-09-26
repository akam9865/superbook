json.array! @sports do |sport|

   json.extract! sport, :id, :name
   
   # json.games sport.games do |game|
   #   json.extract! game, :id, :team1_id, :team2_id, :day_id, :odds, :winner_id
   # end
   
   json.games sport.games do |game|
     json.team1 game.team1
     json.team2 game.team2
     json.day game.day
     json.odds game.odds
    end

end