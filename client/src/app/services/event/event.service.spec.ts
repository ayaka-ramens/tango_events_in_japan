import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EventService } from './event.service';
import { Event } from '../../models/event';
import { HttpErrorResponse } from '@angular/common/http';

describe('EventService', () => {
  let service: EventService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EventService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getEvents', () => {
    it('イベントが全件返ってくること', () => {
      const mockEvents: Event[] =
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
      ];

      service.getEvents()
        .subscribe((events) => {
          expect(events).toEqual(mockEvents);
        });

      const req = httpTestingController.expectOne('http://localhost:3000/api/v1/events');
      expect(req.request.method).toEqual('GET');
      req.flush(mockEvents);
    })
  })

  describe('error', () => {
    it('404エラーが発生した場合は、エラーが返ること', () => {
      let response: any;
      const mockErrorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      service.getEvents()
        .subscribe(
          res => response = res,
          err => expect(err).toEqual(mockErrorResponse)
        );

      const req = httpTestingController.expectOne('http://localhost:3000/api/v1/events');
      expect(req.request.method).toEqual('GET');

      req.flush(mockErrorResponse)
    });
  });
});
