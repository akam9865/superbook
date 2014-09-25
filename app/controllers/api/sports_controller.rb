module Api
  class SportsController < ApiController
    def index
      @sports = Sport.all
      render :index
    end
  end
end
