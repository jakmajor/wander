class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.integer :distance
      t.string :difficulty
      t.integer :elevation
      t.integer :rating
      t.string :type
      t.integer :lattitude
      t.integer :longitude

      t.timestamps
    end
  end
end
