import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNavComponent } from './notification-nav.component';

describe('NotificationNavComponent', () => {
  let component: NotificationNavComponent;
  let fixture: ComponentFixture<NotificationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
