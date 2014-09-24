module Api
  class SportsController < ApiController
    def index
      @sports = Sport.all
      render json: @sports
    end
  end
end
