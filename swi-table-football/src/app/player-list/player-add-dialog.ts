import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IAddPlayer } from '../interfaces';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'player-add-dialog',
  templateUrl: 'player-add-dialog.html',
  styleUrls: ['./player-add-dialog.css']
})
export class PlayerAddDialog {

  player: IAddPlayer = {
    name: "",
    surname: ""
  }

  constructor(
    public dialogRef: MatDialogRef<PlayerAddDialog>,
    private playerService: PlayerService) { }

  onAdd(): void {
    this.playerService.add(this.player).subscribe(data => {
      console.log("Player added")
      this.dialogRef.close()
    })
  }
}