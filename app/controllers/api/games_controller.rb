module Api
  class GamesController < ApiController
    def index
      @games = Game.all
      render :index
    end
    
    def show
      @game = Game.find(params[:id])
      render :show
    end
  end
end
