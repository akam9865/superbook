module Api
  class BetsController < ApiController
    def create
      @bet = current_user.bets.new(self.bet_params)
    
      if @bet.save
        render :show
      else
        render json: @bet.errors, status: :unprocessable_entity
      end
    end

    protected

    def bet_params
      self.params[:bet].permit(:amount, :team_id, :game_id)
    end
  end
end
