FactoryBot.define do
  factory :event do
    name { '中級グループレッスン' }
    # 10日後の13時にしたかった。読みやすく書きたい。
    date { Date.current.next_day(10).to_time.since(13.hours) }
    prefecture_id { 15 }
    address1 { '中央区日本橋小舟町3452' }
    address2 { '3452ビル 2階' }
    description { '中級クラスのグループレッスンです。テーマは「軸の使い方」です。' }
    genre_id { 1 }
  end
end
