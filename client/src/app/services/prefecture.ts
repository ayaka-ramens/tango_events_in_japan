export interface Prefecture {
  id?: number | null;
  name?: string | null;
  en_name?: string | null;
  area?: string | null;
  en_area?: string | null;
}

export const prefectures: Prefecture[] = [
    { id: 1, name: "未指定", en_name: "unspecified", area: "未指定", en_area: "unspecified" },
    { id: 2, name: "リモート", en_name: "remote", area: "リモート", en_area: "remote" },
    { id: 3, name: "北海道", en_name: "hokkaido", area: "北海道", en_area: "hokkaido" },
    { id: 4, name: "青森", en_name: "aomori", area: "東北", en_area: "tohoku" },
    { id: 5, name: "秋田", en_name: "akita", area: "東北", en_area: "tohoku" },
    { id: 6, name: "岩手", en_name: "iwate", area: "東北", en_area: "tohoku" },
    { id: 7, name: "宮城", en_name: "miyagi", area: "東北", en_area: "tohoku" },
    { id: 8, name: "山形", en_name: "yamagata", area: "東北", en_area: "tohoku" },
    { id: 9, name: "福島", en_name: "fukushima", area: "東北", en_area: "tohoku" },
    { id: 10, name: "栃木", en_name: "tochigi", area: "関東", en_area: "kantou" },
    { id: 11, name: "茨城", en_name: "ibaraki", area: "関東", en_area: "kantou" },
    { id: 12, name: "群馬", en_name: "gunma", area: "関東", en_area: "kantou" },
    { id: 13, name: "埼玉", en_name: "saitama", area: "関東", en_area: "kantou" },
    { id: 14, name: "千葉", en_name: "chiba", area: "関東", en_area: "kantou" },
    { id: 15, name: "東京", en_name: "tokyo", area: "関東", en_area: "kantou" },
    { id: 16, name: "神奈川", en_name: "kanagawa", area: "関東", en_area: "kantou" },
    { id: 17, name: "新潟", en_name: "nigata", area: "中部", en_area: "chubu" },
    { id: 18, name: "富山", en_name: "toyama", area: "中部", en_area: "chubu" },
    { id: 19, name: "石川", en_name: "ishikawa", area: "中部", en_area: "chubu" },
    { id: 20, name: "福井", en_name: "fukui", area: "中部", en_area: "chubu" },
    { id: 21, name: "山梨", en_name: "yamanashi", area: "中部", en_area: "chubu" },
    { id: 22, name: "長野", en_name: "nagano", area: "中部", en_area: "chubu" },
    { id: 23, name: "岐阜", en_name: "gifu", area: "中部", en_area: "chubu" },
    { id: 24, name: "静岡", en_name: "shizuoka", area: "中部", en_area: "chubu" },
    { id: 25, name: "愛知", en_name: "aichi", area: "中部", en_area: "chubu" },
    { id: 26, name: "三重", en_name: "mie", area: "近畿", en_area: "kinki" },
    { id: 27, name: "滋賀", en_name: "shiga", area: "近畿", en_area: "kinki" },
    { id: 28, name: "京都", en_name: "kyoto", area: "近畿", en_area: "kinki" },
    { id: 29, name: "大阪", en_name: "osaka", area: "近畿", en_area: "kinki" },
    { id: 30, name: "兵庫", en_name: "hyougo", area: "近畿", en_area: "kinki" },
    { id: 31, name: "奈良", en_name: "nara", area: "近畿", en_area: "kinki" },
    { id: 32, name: "和歌山", en_name: "wakayama", area: "近畿", en_area: "kinki" },
    { id: 33, name: "鳥取", en_name: "tottori", area: "中国", en_area: "chugoku" },
    { id: 34, name: "島根", en_name: "simane", area: "中国", en_area: "chugoku" },
    { id: 35, name: "岡山", en_name: "okayama", area: "中国", en_area: "chugoku" },
    { id: 36, name: "広島", en_name: "hiroshima", area: "中国", en_area: "chugoku" },
    { id: 37, name: "山口", en_name: "yamaguchi", area: "中国", en_area: "chugoku" },
    { id: 38, name: "徳島", en_name: "tokushima", area: "四国", en_area: "shikoku" },
    { id: 39, name: "香川", en_name: "kagawa", area: "四国", en_area: "shikoku" },
    { id: 40, name: "愛媛", en_name: "ehime", area: "四国", en_area: "shikoku" },
    { id: 41, name: "高知", en_name: "kouchi", area: "四国", en_area: "shikoku" },
    { id: 42, name: "福岡", en_name: "fukuoka", area: "九州", en_area: "kyushu" },
    { id: 43, name: "佐賀", en_name: "saga", area: "九州", en_area: "kyushu" },
    { id: 44, name: "長崎", en_name: "nagasaki", area: "九州", en_area: "kyushu" },
    { id: 45, name: "熊本", en_name: "kumamoto", area: "九州", en_area: "kyushu" },
    { id: 46, name: "大分", en_name: "oita", area: "九州", en_area: "kyushu" },
    { id: 47, name: "宮崎", en_name: "miyazaki", area: "九州", en_area: "kyushu" },
    { id: 48, name: "鹿児島", en_name: "kagoshima", area: "九州", en_area: "kyushu" },
    { id: 49, name: "沖縄", en_name: "okinawa", area: "九州", en_area: "kyushu" }
]
