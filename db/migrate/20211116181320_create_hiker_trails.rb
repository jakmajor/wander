class CreateHikerTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :hiker_trails do |t|
      t.references :hiker, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true

      t.timestamps
    end
  end
end
