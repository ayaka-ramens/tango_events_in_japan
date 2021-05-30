import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EventService } from 'src/app/services/event/event.service';
import { EventServiceStub } from 'src/app/services/event/event.service.stub';
import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: 'api/v1/events/:id', component: EventDetailComponent }]
        )
      ],
      providers: [ { provide: EventService, useValue: new EventServiceStub() } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
