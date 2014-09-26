module Api
  class SportsController < ApiController
    def index
      @sports = Sport.all
      render :index
    end
    
    def show
      @sport = Sport.find(params[:id])
      render :show
    end
  end
end
