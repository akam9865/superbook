module Api
  class BetsController < ApiController
    def create
      @bet = current_user.bets.new(self.bet_params)
      @bet.result = "pending"
    
      if @bet.save
        current_user.bankroll -= @bet.amount
        current_user.save
        render :show
      else
        render json: @bet.errors, status: :unprocessable_entity
      end
    end
    
    def show
      @bet = Bet.find(params[:id])
      render :show
    end
    
    def update
      # fails bankroll validation when it shouldn't
      # fix so it doesn't check that on the update bet save
      # does it need this bet save? yes it does
      
      @bet = Bet.find(params[:id])
      @bet.game.simulate
      
      if @bet.game.winner_id == @bet.team_id
        current_user.bankroll += @bet.amount + @bet.to_win
        @bet.update_attribute(:result, "winner")
      else
        @bet.update_attribute(:result, "loser")
      end
      
      current_user.save
      render :show
    end

    protected

    def bet_params
      self.params[:bet].permit(:amount, :team_id, :game_id, :to_win)
    end
  end
end
