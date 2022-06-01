import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedMessagingComponent } from './matched-messaging.component';

describe('MatchedMessagingComponent', () => {
  let component: MatchedMessagingComponent;
  let fixture: ComponentFixture<MatchedMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedMessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
