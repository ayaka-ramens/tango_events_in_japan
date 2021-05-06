class CreatePrefectures < ActiveRecord::Migration[6.0]
  def change
    create_table :prefectures do |t|
      t.string :name, null: false
      t.string :en_name, null: false
      t.string :area, null: false
      t.string :en_area, null: false

      t.timestamps
    end
  end
end
