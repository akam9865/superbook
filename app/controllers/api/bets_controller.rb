module Api
  class BetsController < ApiController
    def create
      @bet = current_user.bets.new(self.bet_params)
      # to_win(@bet, @bet.game.odds)
      @bet.result = "pending"
    
      if @bet.save
        current_user.bankroll -= @bet.amount
        current_user.save
        render :show
      else
        render json: @bet.errors, status: :unprocessable_entity
      end
    end

    protected

    def to_win(bet, odds)
      if bet.team == bet.game.team1
        bet.to_win = odds / (1 - odds) * bet.amount
      else
        bet.to_win = (1 - odds) / odds * bet.amount
      end
    end

    def bet_params
      self.params[:bet].permit(:amount, :team_id, :game_id, :to_win)
    end
  end
end
