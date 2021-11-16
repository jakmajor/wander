class HikerTrailsController < ApplicationController

    def destroy 
        deleteTrail = HikerTrail.find(params[:id])
        deleteTrail.destroy
    end

    def create 
        newTrail = HikerTrail.create!(newTrail_params)
        render json: newTrail 
    end

    private 

    def newTrail_params 
        params.permit(:trail_id, :hiker_id)
    end

end
