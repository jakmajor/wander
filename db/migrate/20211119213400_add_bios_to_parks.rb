class AddBiosToParks < ActiveRecord::Migration[6.1]
  def change
    add_column :parks, :bio, :string
    add_column :parks, :est, :int
  end
end
