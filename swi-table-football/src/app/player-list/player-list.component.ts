import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { IPlayer } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { PlayerAddDialog } from './player-add-dialog';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: IPlayer[]

  displayedColumns: string[] = ['name', 'surname'];

  constructor(private playerService: PlayerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.playerService.getAll().subscribe(data => {
      this.players = data
      console.log(this.players)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerAddDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.playerService.getAll().subscribe(data => {
        this.players = data
        console.log(this.players)
      })
    });
  }

}
