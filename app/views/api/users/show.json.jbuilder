#
#
# json.array! @user.bets do |bet|
#
#   json.extract! bet, :id, :amount, :game_id, :team_id, :user_id
#
# end

json.bets @user.bets do |bet|
  json.extract! bet, :id, :amount, :to_win, :result
  
  json.team bet.team
  json.game bet.game
end

json.username @user.username