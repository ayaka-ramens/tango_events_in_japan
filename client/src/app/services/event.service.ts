import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  /*
   * バックエンドはポート番号「3000」で待ち受けているため、そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   */
  private host: string = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.host + '/events')
      .pipe(
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  // 失敗したHttp操作を処理する
  private handleError<T>(operation='operation', result?:T) {
    return(error: any): Observable<T> => {
      console.error(`エラーが発生しました operation: ${operation} failed: ${error}`);
      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

}
