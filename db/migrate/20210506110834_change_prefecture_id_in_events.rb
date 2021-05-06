class ChangePrefectureIdInEvents < ActiveRecord::Migration[6.0]
  def up
    change_column :events, :prefecture_id, :integer, default: 1
  end

  def down
    change_column :events, :prefecture_id, :integer
  end
end
