class Genre < ApplicationRecord
  validates :name, presence: true
  validates :en_name, presence: true
  validates :remote, presence: true

  has_many :events
end
