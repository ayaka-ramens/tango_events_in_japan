require 'rails_helper'

RSpec.describe Event, type: :model do
  describe '#valid?' do
    subject { event }
    describe 'name' do
      let(:event) { build(:event, name: name) }

      context 'あるとき' do
        let(:name) { '中級グループレッスン' }
        it { is_expected.to be_valid }
      end

      context 'nilのとき' do
        let(:name) { nil }
        it { is_expected.to_not be_valid }
      end
    end

    describe 'date' do
      let(:event) { build(:event, date: date) }

      context 'あるとき' do
        let(:date) { Time.current }
        it { is_expected.to be_valid }
      end

      context 'nilのとき' do
        let(:date) { nil }
        it { is_expected.to_not be_valid }
      end
    end
  end
end
