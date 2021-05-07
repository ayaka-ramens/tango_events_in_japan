class Genre < ApplicationRecord
  validates :name, presence: true
  validates :remote, presence: true
end
