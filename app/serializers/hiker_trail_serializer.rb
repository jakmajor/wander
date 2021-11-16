class HikerTrailSerializer < ActiveModel::Serializer
  attributes :id
  has_one :hiker
  has_one :trail
end
