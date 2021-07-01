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

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.host + `/api/v1/events/${id}`)
      .pipe(
        catchError(this.handleError<Event>('getEvent'))
      );
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.host + '/api/v1/events', this.generateParams(event), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('createEvent'))
      )
  }

  // 失敗したHttp操作を処理する
  private handleError<T>(operation='operation', result?:T) {
    return(error: any): Observable<T> => {
      console.error(`エラーが発生しました operation: ${operation} failed: ${error}`);
      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  private generateParams(event: Event): object {
    let params: object = {
      event: {
        name: event.name,
        date: event.date,
        prefecture_id: event.prefecture_id,
        address1: event.address1,
        address2: event.address2,
        description: event.description,
        genre_id: event.genre_id
      }
    }
    return params
  }

}
