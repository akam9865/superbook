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
    
    def update
      
    end

    protected

    def bet_params
      self.params[:bet].permit(:amount, :team_id, :game_id, :to_win)
    end
  end
end
