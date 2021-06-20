export interface Genre {
  id?: number | null;
  name?: string | null;
  en_name?: string | null;
  remote?: boolean | null;
}

export const genres: Genre[] = [
    { id: 1, name: "ミロンガ", en_name: "milonga", remote: false},
    { id: 2, name: "レッスン", en_name: "lesson", remote: false},
    { id: 3, name: "プラクティカ", en_name: "practice", remote: false},
    { id: 4, name: "勉強会", en_name: "study", remote: false},
    { id: 5, name: "その他ローカル", en_name: "other local", remote: false},
    { id: 6, name: "ミロンガ", en_name: "milonga", remote: true},
    { id: 7, name: "レッスン", en_name: "lesson", remote: true},
    { id: 8, name: "勉強会", en_name: "study", remote: true},
    { id: 9, name: "その他リモート", en_name: "other remote", remote: true}
  ]
