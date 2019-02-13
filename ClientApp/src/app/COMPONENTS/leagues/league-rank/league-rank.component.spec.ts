import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRankComponent } from './league-rank.component';

describe('LeagueRankComponent', () => {
  let component: LeagueRankComponent;
  let fixture: ComponentFixture<LeagueRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
