class Prefecture < ApplicationRecord
  validates :name, presence: true
  validates :en_name, presence: true
  validates :area, presence: true
  validates :en_area, presence: true
end
