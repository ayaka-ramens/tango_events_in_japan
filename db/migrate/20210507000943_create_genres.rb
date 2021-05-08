class CreateGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :genres do |t|
      t.string :name, null: false
      t.string :en_name, null: false
      t.boolean :remote, null: false, default: false

      t.timestamps
    end
  end
end
