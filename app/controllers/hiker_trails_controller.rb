class HikerTrailsController < ApplicationController

    def destroy 
        deleteTrail = HikerTrail.find(params[:id])
        deleteTrail.destroy
    end

    def create
        trail = HikerTrail.find_by(newTrail_params)
        if trail.present?
            trail.destroy
            render status: :ok
        else
            newTrail = HikerTrail.create!(newTrail_params)
            render json: newTrail 
        end
        
    end

    private 

    def newTrail_params 
        params.require(:hiker_trail).permit(:trail_id, :hiker_id)
    end

end
