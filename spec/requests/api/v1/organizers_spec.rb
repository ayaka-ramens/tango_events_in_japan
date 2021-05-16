require 'rails_helper'

RSpec.describe "Api::V1::Organizers", type: :request do
  describe 'GET api/v1/organizers' do
    context 'オーガナイザーが存在するとき' do
      let!(:organizer1) { create(:organizer) }
      let!(:organizer2) { create(:organizer) }

      before do
        get '/api/v1/organizers'
      end

      it '200 OK が返ってくる' do
        expect(response).to be_successful
        expect(response.status).to eq 200
      end

      it '登録したオーガナイザーが全て返ってくる' do
        json = JSON.parse(response.body)
        expect(json.length).to eq(2)
      end
    end
  end

  describe 'GET api/v1/organizers/:id' do
    context 'オーガナイザーが存在するとき' do
      let(:organizer) { create(:organizer) }

      before do
        get "/api/v1/organizers/#{organizer.id}"
      end

      it '200 OK が返ってくる' do
        expect(response).to be_successful
        expect(response.status).to eq 200
      end

      it 'オーガナイザー情報が返ってくる' do
        json = JSON.parse(response.body)
        expect(json['id']).to eq(organizer.id)
      end
    end
  end

  describe 'POST api/v1/organizers' do
    before do
      post '/api/v1/organizers',
      params: {
        organizer: {
          name: 'オーガナイザー名',
          en_name: 'organizer name',
          description: 'プライベートレッスン・グループレッスン・プラクティカを開催しています。',
          prefecture_id: 16,
          address1: '神奈川県横浜市磯子区汐見台8-1-9',
          address2: '汐見台ビル5階',
          hp_url: 'https://example.com',
          email: 'test@example.com',

        }
      }
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'オーガナイザーが登録できている' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('オーガナイザー名')
    end
  end

  describe 'PUT api/v1/organizers/:id' do
    let(:organizer) { create(:organizer) }

    before do
      put "/api/v1/organizers/#{organizer.id}", params: { organizer: { name: 'オーガナイザー名更新' } }
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'オーガナイザーが更新できている' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('オーガナイザー名更新')
    end
  end

  describe 'DELETE api/v1/organizers/:id' do
    let(:organizer) { create(:organizer) }

    before do
      delete "/api/v1/organizers/#{organizer.id}"
    end

    it '200 OK が返ってくる' do
      expect(response).to be_successful
      expect(response.status).to eq 200
    end

    it 'オーガナイザーが削除できている' do
      expect(Organizer.count).to eq(0)
    end
  end
end
