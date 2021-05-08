class Organizer < ApplicationRecord
  validates :name, presence: true

  belongs_to :prefecture, optional: true
end
