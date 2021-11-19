class DeleteColumnFromParks < ActiveRecord::Migration[6.1]
  def change
    remove_column :parks, :numberOfVisitors, :integer
    remove_column :parks, :cloutFactor, :integer
  end
end
