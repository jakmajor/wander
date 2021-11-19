class AddImageToParks < ActiveRecord::Migration[6.1]
  def change
    add_column :parks, :image_url, :string
  end
end
