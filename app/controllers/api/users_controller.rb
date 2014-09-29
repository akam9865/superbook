module Api
  class UsersController < ApiController
    def index
      @users = User.all
      render :index
    end
    
    def show
      @user = current_user
      render :show
    end
  end
end
