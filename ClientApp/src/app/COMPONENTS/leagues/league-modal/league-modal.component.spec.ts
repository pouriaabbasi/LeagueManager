import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueModalComponent } from './league-modal.component';

describe('LeagueModalComponent', () => {
  let component: LeagueModalComponent;
  let fixture: ComponentFixture<LeagueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
