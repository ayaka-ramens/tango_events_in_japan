require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe 'GET events' do
    context 'イベントが存在するとき' do
      let!(:event1) { create(:event) }
      let!(:event2) { create(:event) }

      before do
        get '/events'
      end

      it '200 OK が返ってくる' do
        expect(response).to be_successful
        expect(response.status).to eq 200
      end

      it '登録したイベントが全て返ってくる' do
        json = JSON.parse(response.body)
        expect(json.length).to eq(2)
      end
    end
  end

  describe 'GET events/:id' do
    context 'イベントが存在するとき' do
      let(:event) { create(:event) }

      before do
        get "/events/#{event.id}"
      end

      it '200 OK が返ってくる' do
        expect(response).to be_successful
        expect(response.status).to eq 200
      end

      it 'イベント情報が返ってくる' do
        json = JSON.parse(response.body)
        expect(json['id']).to eq(event.id)
      end
    end
  end

  describe 'POST events' do
    before do
      post '/events', params: {
        event: {
          name: '中級レッスン',
          date: Time.current,
          prefecture_id: 15,
          address1: '中央区日本橋小舟町3452',
          address2: '3452ビル 2階',
          description: '中級クラスのグループレッスンです。テーマは「軸の使い方」です。',
          genre_id: 1
        }
      }
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'イベントが登録できている' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('中級レッスン')
    end
  end

  describe 'PUT events/:id' do
    let(:event) { create(:event) }

    before do
      put "/events/#{event.id}", params: { event: { name: 'イベント名更新' } }
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'イベントが更新できている' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('イベント名更新')
    end
  end

  describe 'DELETE events/:id' do
    let(:event) { create(:event) }

    before do
      delete "/events/#{event.id}"
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'イベントが削除できている' do
      expect(Event.count).to eq(0)
    end
  end
end
