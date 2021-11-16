class Trail < ApplicationRecord
    has_many :hiker_trails 
    has_many :hikers, through: :hiker_trails
    belongs_to :park
end
