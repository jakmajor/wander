class Hiker < ApplicationRecord
    has_many :hiker_trails, dependent: :destroy
    has_many :trails, through: :hiker_trails
    has_secure_password

    validates :name, presence: true 
    validates :username, uniqueness: true
end
