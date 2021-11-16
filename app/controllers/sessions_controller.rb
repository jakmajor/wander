class SessionsController < ApplicationController
    def create
        hiker = Hiker.find_by(username: params[:username])
        if hiker&.authenticate(params[:password])
            session[:hiker_id] = hiker.id
            render json: hiker, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        if session[:hiker_id]
            session.delete :hiker_id
            head :no_content
        else 
            render json: {errors: ["You must be logged in to access this content"] }, status: :unauthorized
        end
      end
end
