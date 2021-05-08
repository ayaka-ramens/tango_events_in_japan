FactoryBot.define do
  factory :organizer do
    name { '横浜タンゴスクール' }
    en_name { 'Yokohama tango school' }
    description { '横浜のスクールです。プライベートレッスン・グループレッスン・プラクティカを開催しています。' }
    prefecture_id { 16 }
    address1 { '神奈川県横浜市磯子区汐見台8-1-9' }
    address2 { '汐見台ビル5階' }
    hp_url { 'https://example.com' }
    email { 'test@example.com' }
  end
end
