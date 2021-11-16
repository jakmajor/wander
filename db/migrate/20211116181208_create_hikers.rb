class CreateHikers < ActiveRecord::Migration[6.1]
  def change
    create_table :hikers do |t|
      t.string :name
      t.string :username
      t.string :bio 
      t.string :image_url
      t.string :password_digest

      t.timestamps
    end
  end
end
