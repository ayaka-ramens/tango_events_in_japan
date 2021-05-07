class AddGenreIdToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :genre_id, :integer, after: :description
  end
end
