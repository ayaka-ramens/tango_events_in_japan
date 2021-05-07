class Genre < ApplicationRecord
  validates :name, presence: true
  validates :en_name, presence: true

  has_many :events
end
