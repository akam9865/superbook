module Api
  class GamesController < ApiController
    def index
      @games = Game.all
      render :index
    end
  end
end
