import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EventService } from 'src/app/services/event/event.service';
import { Event } from '../../models/event';
import { Genre, genres } from 'src/app/services/genre/genre';
import { Prefecture, prefectures } from 'src/app/services/prefecture/prefecture';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  prefectureData: Prefecture[] = [];
  genreData: Genre[] = [];

  // TODO バリデーションちゃんと書く＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  eventForm = this.fb.group({
    name: ['', Validators.required],
    date: [''],
    prefecture_id: [''],
    address1: [''],
    address2: [''],
    description: [''],
    genre_id: ['']
  })

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.getPrefectures();
    this.getGenre();
  }

  getPrefectures(): void {
    this.prefectureData = prefectures
  }

  getGenre(): void {
    this.genreData = genres
  }

  createEvent(): void {
    console.log(this.eventForm.value)
    // this.eventService.createEvent(event)
    //   .subscribe(event => {
    //     // TODO 通知する
    //     console.log(`created: ${event.name}`);
    //   })
  }
}
