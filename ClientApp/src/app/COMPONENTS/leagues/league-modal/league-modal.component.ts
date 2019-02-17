import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LeagueModel } from 'src/app/MODELS/league/league.model';
import { LeagueService } from 'src/app/SERVICES/league.service';
import { UpdateLeagueModel } from 'src/app/MODELS/league/update-league.model';
import { AddLeagueModel } from 'src/app/MODELS/league/add-league.model';

@Component({
  selector: 'app-league-modal',
  templateUrl: './league-modal.component.html',
  styleUrls: ['./league-modal.component.css']
})
export class LeagueModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LeagueModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LeagueModel,
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
  }

  private submitLeague() {
    if (this.data) {
      if (this.data.id) {
        var updateLeagueModel = new UpdateLeagueModel();
        updateLeagueModel.title = this.data.title;
        updateLeagueModel.typeId = this.data.typeId;
        updateLeagueModel.iteration = this.data.iteration;
        updateLeagueModel.startDate = this.data.startDate;
        updateLeagueModel.endDate = this.data.endDate;
        updateLeagueModel.isCompleted = this.data.isCompleted;
        this.leagueService.UpdateLeague(this.data.id, updateLeagueModel).subscribe(league => {
          this.dialogRef.close(true);
        })
      }
      else {
        var addLeagueModel = new AddLeagueModel();
        addLeagueModel.title = this.data.title;
        addLeagueModel.typeId = this.data.typeId;
        addLeagueModel.iteration = this.data.iteration;
        addLeagueModel.startDate = this.data.startDate;
        addLeagueModel.endDate = this.data.endDate;
        addLeagueModel.isCompleted = this.data.isCompleted;
        this.leagueService.AddLeague(addLeagueModel).subscribe(league => {
          this.dialogRef.close(true);
        })
      }
    }
  }

  private close() {
    this.dialogRef.close(false);
  }

}
