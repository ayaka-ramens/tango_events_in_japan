import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class EventServiceStub {
  getEvents() {
    return of(
      [
        { id: 1,
          name: '中級グループレッスン',
          date: '2021-05-10T10:00:00.000Z',
          prefecture_id: 15,
          address1: '中央区日本橋小舟町3452',
          address2: '3452ビル 2階',
          description: '中級クラスのグループレッスンです。テーマは「軸の使い方」です。',
          genre_id: 1 },
        { id: 2,
          name: 'vamosミロンガ',
          date: '2021-07-20T10:00:00.000Z',
          prefecture_id: 15,
          address1: '千代田区三番町1-5-5',
          address2: '三番町第2ビル4F',
          description: 'welcome!!',
          genre_id: 1 }
      ]
    );
  }
}
