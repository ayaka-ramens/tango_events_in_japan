import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { Event } from '../../models/event';
import { Genre, genres } from 'src/app/services/genre/genre';
import { Prefecture, prefectures } from 'src/app/services/prefecture/prefecture';


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  prefectureData: Prefecture[] = [];
  genreData: Genre[] = [];
  eventList: Event[] = [];

  constructor(
    private eventService: EventService,
    ) { }

  ngOnInit(): void {
    this.getPrefectures();
    this.getGenre();
    this.getEvents();
  }

  getPrefectures():void {
    this.prefectureData = prefectures
  }

  getGenre(): void {
    this.genreData = genres
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(eventList => this.eventList = eventList)
  }

}
