class CreateOrganizers < ActiveRecord::Migration[6.0]
  def change
    create_table :organizers do |t|
      t.string :name, null: false
      t.string :en_name
      t.text :description
      t.integer :prefecture_id
      t.string :address1
      t.string :address2
      t.string :hp_url
      t.string :email

      t.timestamps
    end
  end
end
