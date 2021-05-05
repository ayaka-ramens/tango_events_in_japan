class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.datetime :date, null: false
      t.integer :prefecture_id
      t.string :address1
      t.string :address2
      t.text :description

      t.timestamps
    end
  end
end
