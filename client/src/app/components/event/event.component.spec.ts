import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { EventService } from '../../services/event/event.service';
import { EventServiceStub } from '../../services/event/event.service.stub';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventComponent ],
      providers: [ { provide: EventService, useValue: new EventServiceStub() } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInitを実行するとgetProductsが呼ばれモックした内容が返されること', () => {
    spyOn(component, 'getEvents');
    component.ngOnInit();
    expect(component.getEvents).toHaveBeenCalled();
  });
});
