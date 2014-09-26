json.games @sport.games do |game|
  json.team1 game.team1
  json.team2 game.team2
  json.day game.day
  json.odds game.odds
  json.id game.id
end