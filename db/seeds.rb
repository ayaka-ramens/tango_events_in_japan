# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  ['未指定', 'unspecified', '未指定', 'unspecified'],
  ['リモート', 'remote', 'リモート', 'remote'],
  ['北海道', 'hokkaido', '北海道', 'hokkaido'],
  ['青森', 'aomori', '東北', 'tohoku'],
  ['秋田', 'akita', '東北', 'tohoku'],
  ['岩手', 'iwate', '東北', 'tohoku'],
  ['宮城', 'miyagi', '東北', 'tohoku'],
  ['山形', 'yamagata', '東北', 'tohoku'],
  ['福島', 'fukushima', '東北', 'tohoku'],
  ['栃木', 'tochigi', '関東', 'kantou'],
  ['茨城', 'ibaraki', '関東', 'kantou'],
  ['群馬', 'gunma', '関東', 'kantou'],
  ['埼玉', 'saitama', '関東', 'kantou'],
  ['千葉', 'chiba', '関東', 'kantou'],
  ['東京', 'tokyo', '関東', 'kantou'],
  ['神奈川', 'kanagawa', '関東', 'kantou'],
  ['新潟', 'nigata', '中部', 'chubu'],
  ['富山', 'toyama', '中部', 'chubu'],
  ['石川', 'ishikawa', '中部', 'chubu'],
  ['福井', 'fukui', '中部', 'chubu'],
  ['山梨', 'yamanashi', '中部', 'chubu'],
  ['長野', 'nagano', '中部', 'chubu'],
  ['岐阜', 'gifu', '中部', 'chubu'],
  ['静岡', 'shizuoka', '中部', 'chubu'],
  ['愛知', 'aichi', '中部', 'chubu'],
  ['三重', 'mie', '近畿', 'kinki'],
  ['滋賀', 'shiga', '近畿', 'kinki'],
  ['京都', 'kyoto', '近畿', 'kinki'],
  ['大阪', 'osaka', '近畿', 'kinki'],
  ['兵庫', 'hyougo', '近畿', 'kinki'],
  ['奈良', 'nara', '近畿', 'kinki'],
  ['和歌山', 'wakayama', '近畿', 'kinki'],
  ['鳥取', 'tottori', '中国', 'chugoku'],
  ['島根', 'simane', '中国', 'chugoku'],
  ['岡山', 'okayama', '中国', 'chugoku'],
  ['広島', 'hiroshima', '中国', 'chugoku'],
  ['山口', 'yamaguchi', '中国', 'chugoku'],
  ['徳島', 'tokushima', '四国', 'shikoku'],
  ['香川', 'kagawa', '四国', 'shikoku'],
  ['愛媛', 'ehime', '四国', 'shikoku'],
  ['高知', 'kouchi', '四国', 'shikoku'],
  ['福岡', 'fukuoka', '九州', 'kyushu'],
  ['佐賀', 'saga', '九州', 'kyushu'],
  ['長崎', 'nagasaki', '九州', 'kyushu'],
  ['熊本', 'kumamoto', '九州', 'kyushu'],
  ['大分', 'oita', '九州', 'kyushu'],
  ['宮崎', 'miyazaki', '九州', 'kyushu'],
  ['鹿児島', 'kagoshima', '九州', 'kyushu'],
  ['沖縄', 'okinawa', '九州', 'kyushu']
].each do |p|
  Prefecture.create!(
    name:    p[0],
    en_name: p[1],
    area:    p[2],
    en_area: p[3]
  )
end

[
  ['ミロンガ', 'milonga', false],
  ['レッスン', 'lesson', false],
  ['プラクティカ', 'practice', false],
  ['勉強会', 'study', false],
  ['その他ローカル', 'other local', false],
  ['ミロンガ', 'milonga', true],
  ['レッスン', 'lesson', true],
  ['勉強会', 'study', true],
  ['その他リモート', 'other remote', true],
].each do |g|
  Genre.create!(
    name: g[0],
    en_name: g[1],
    remote: g[2]
  )
  puts "#{g[0]} 登録完了"
end
