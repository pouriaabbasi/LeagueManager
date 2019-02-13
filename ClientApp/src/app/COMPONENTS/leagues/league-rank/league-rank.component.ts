import { Component, OnInit, Input } from '@angular/core';
import { LeagueRankModel } from 'src/app/MODELS/league/league-rank.model';

@Component({
  selector: 'app-league-rank',
  templateUrl: './league-rank.component.html',
  styleUrls: ['./league-rank.component.css']
})
export class LeagueRankComponent implements OnInit {

  @Input() leagueRanks: LeagueRankModel[];

  constructor() { }

  ngOnInit() {
  }

}
