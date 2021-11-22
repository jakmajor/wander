class ChangeCoordinatesDataType < ActiveRecord::Migration[6.1]
  def up
    change_column :trails, :lattitude, :float
    change_column :trails, :longitude, :float
  end
  
  def down
    change_column :trails, :lattitude, :integer
    change_column :trails, :longitude, :integer
  end
end
