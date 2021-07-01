import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EventService } from 'src/app/services/event/event.service';
import { Genre, genres } from 'src/app/services/genre';
import { Prefecture, prefectures } from 'src/app/services/prefecture';

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
    private router: Router,
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
    this.eventService.createEvent(this.eventForm.value)
      .subscribe(event => {
        // TODO 通知する
        console.log(`created: ${this.eventForm.value.name}`);
        this.router.navigate([`api/v1/events/${event.id}`]);
      })
  }
}
