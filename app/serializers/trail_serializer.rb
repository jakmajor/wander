class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :difficulty, :elevation, :rating, :type_of_hike, :lattitude, :longitude
end
