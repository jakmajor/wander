class HikersController < ApplicationController
    before_action :authorize, only: [:show]

    def index 
        hikers = Hiker.all 
        render json: hikers 
    end

    def create
        signup = Hiker.create!(hiker_params)
        session[:hiker_id] = signup.id
        render json: signup, status: :created
    end

    def show
        hiker = Hiker.find_by(id: session[:hiker_id])
        render json: hiker
    end

    private
    def hiker_params
        params.permit(:name, :username, :image_url, :bio, :password, :password_confirmation)
    end
    def authorize
        return render json: { error: "not authorized" }, status: :unauthorized unless session.include? :hiker_id
    end
end
