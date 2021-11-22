class HikerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image_url, :bio, :trails

end
