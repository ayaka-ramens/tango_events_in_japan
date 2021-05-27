import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { Event } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  // TODO: 環境ごとに切り替えるようにする
  private host: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.host + '/api/v1/events')
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
