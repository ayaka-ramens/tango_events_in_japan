import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { Event } from '../../models/event';
import { Genre, genres } from 'src/app/services/genre/genre';


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  genreData: Genre[] = [];
  eventList: Event[] = [];

  constructor(
    private eventService: EventService,
    ) { }

  ngOnInit(): void {
    this.getGenre();
    this.getEvents();
  }

  getGenre(): void {
    this.genreData = genres
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(eventList => this.eventList = eventList)
  }

}
