class HikerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image_url, :bio, :favorites 

  has_many :trails

  def favorites
    object.hiker_trails 
  end
end
