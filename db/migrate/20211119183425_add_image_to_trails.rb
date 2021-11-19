class AddImageToTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :image_url, :string
  end
end
