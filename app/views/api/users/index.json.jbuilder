json.array! @users do |user|
  
  json.extract! user, :id
  
  json.bets user.bets do |bet|
    json.id bet.id
    json.amount bet.amount
    json.game_id bet.game_id
    json.team_id bet.team_id
  end
end