class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :prefecture, :address1, :address2, :description,
    :genre, :created_at, :updated_at

  def prefecture
    Prefecture.find(object.prefecture_id).name
  end

  def genre
    Genre.find(object.genre_id).name
  end
end
