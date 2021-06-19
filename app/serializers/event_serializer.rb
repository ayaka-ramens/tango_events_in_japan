class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :prefecture_id, :prefecture_name, :address1, :address2, :description,
    :genre, :created_at, :updated_at

  def prefecture_name
    Prefecture.find(object.prefecture_id).name
  end

  def genre
    Genre.find(object.genre_id).name
  end
end
