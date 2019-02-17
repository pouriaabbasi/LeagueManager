import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlayerModel } from 'src/app/MODELS/player/player.model';
import { AddPlayerModel } from 'src/app/MODELS/player/add-player.model';
import { UpdatePlayerModel } from 'src/app/MODELS/player/update-player.model';
import { PlayerService } from 'src/app/SERVICES/player.service';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlayerModel
  ) { }

  ngOnInit() {
  }

  private submit() {
    if (this.data) {
      if (!this.data.id) {
        var addPlayerModel = new AddPlayerModel();
        addPlayerModel.firstName = this.data.firstName;
        addPlayerModel.lastName = this.data.lastName;
        this.playerService.AddPlayer(addPlayerModel).subscribe(player => {
          this.dialogRef.close(true);
        })
      }
      else {
        var updatePlayerModel = new UpdatePlayerModel();
        updatePlayerModel.id = this.data.id;
        updatePlayerModel.firstName = this.data.firstName;
        updatePlayerModel.lastName = this.data.lastName;
        this.playerService.UpdatePlayer(this.data.id, updatePlayerModel).subscribe(player => {
          this.dialogRef.close(true);
        })
      }
    }
  }

  private close() {
    this.dialogRef.close(false);
  }
}
