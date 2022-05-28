import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNavComponent } from './logo-nav.component';

describe('LogoNavComponent', () => {
  let component: LogoNavComponent;
  let fixture: ComponentFixture<LogoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
