class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :state, :image_url, :bio, :est
  
  has_many :trails
end
