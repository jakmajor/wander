class RenameTypeToTypeOfHike < ActiveRecord::Migration[6.1]
  def change
    rename_column :trails, :type, :type_of_hike
  end
end
