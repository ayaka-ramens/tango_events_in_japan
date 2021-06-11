class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :prefecture, :address1, :address2, :description,
    :genre_id, :created_at, :updated_at

  def prefecture
    Prefecture.find(object.prefecture_id).name
  end
end
