import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCardComponent } from './explore-card.component';

describe('ExploreCardComponent', () => {
  let component: ExploreCardComponent;
  let fixture: ComponentFixture<ExploreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
