class BetsController < ApplicationController
  def new
  end
  
  def create
    @bet = current_user.bets.new(bet_params)
    
    if @bet.save
      # something
    else
      flash.now[:errors] = @bet.errors.full_messages
      # render :new
    end
  end

  private

  def bet_params
    params.require(:bet).permit(:amount, :team_id, :game_id)
  end
end
