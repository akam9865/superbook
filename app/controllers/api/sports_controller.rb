module Api
  class SportsController < ApiController
    def index
      @sports = Sport.includes(:games)
      render :index
    end
    
    def show
      @sport = Sport.find(params[:id])
      # @sport = Sport.includes(:team1, :team2, :day, :games)
      render :show
    end
  end
end
