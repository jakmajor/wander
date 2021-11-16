class HikerTrail < ApplicationRecord
  belongs_to :hiker
  belongs_to :trail
end
