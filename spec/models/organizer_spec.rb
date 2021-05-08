require 'rails_helper'

RSpec.describe Organizer, type: :model do
  describe '#valid?' do
    subject { organizer }
    describe 'name' do
      let(:organizer) { build(:organizer, name: name) }

      context 'あるとき' do
        let(:name) { '横浜タンゴスクール' }
        it { is_expected.to be_valid }
      end

      context 'nilのとき' do
        let(:name) { nil }
        it { is_expected.to_not be_valid }
      end
    end
  end
end
