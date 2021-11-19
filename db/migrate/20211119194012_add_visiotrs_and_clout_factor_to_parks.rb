class AddVisiotrsAndCloutFactorToParks < ActiveRecord::Migration[6.1]
  def change
    add_column :parks, :annual_visitors, :int
    add_column :parks, :clout_factor, :integer
  end
end
