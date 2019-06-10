import { Component, OnInit } from '@angular/core';
import { IAddTeam, IPlayer } from '../interfaces';
import { TeamService } from '../team/team.service';
import { MatDialogRef } from '@angular/material';
import { PlayerService } from '../player/player.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-add-dialog',
  templateUrl: './team-add-dialog.component.html',
  styleUrls: ['./team-add-dialog.component.css']
})
export class TeamAddDialogComponent implements OnInit {

  teamControl = new FormControl('', [Validators.required]);

  team: IAddTeam = {
    name: "",
    playerOneId: 0,
    playerTwoId: 0
  }

  players: IPlayer[]

  constructor(
    public dialogRef: MatDialogRef<TeamAddDialogComponent>,
    private teamService: TeamService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAll().subscribe(data => {
      this.players = data
      console.log(this.players)
    })
  }

  onAdd(): void {
    console.log(this.team)
    this.teamService.add(this.team).subscribe(data => {
      console.log("Team added")
      this.dialogRef.close()
    })
  }

}
