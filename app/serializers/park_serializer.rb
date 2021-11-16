class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :state
  
  has_many :trails
end
