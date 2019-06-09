import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IAddMatch, ITeam } from '../interfaces';
import { MatDialogRef } from '@angular/material';
import { TeamAddDialogComponent } from '../team-component/team-add-dialog.component';
import { MatchService } from '../match/match.service';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-match-add-dialog',
  templateUrl: './match-add-dialog.component.html',
  styleUrls: ['./match-add-dialog.component.css']
})
export class MatchAddDialogComponent implements OnInit {

  teamOneControl = new FormControl('', [Validators.required])
  teamTwoControl = new FormControl('', [Validators.required])

  match: IAddMatch = {
    teamOneId: null,
    teamTwoId: null,
    winner: 1
  }

  teams: ITeam[]

  pickWinner: number[] = [1, 2];

  constructor(
    public dialogRef: MatDialogRef<TeamAddDialogComponent>,
    private teamService: TeamService,
    private matchService: MatchService) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(data => {
      this.teams = data
    })
  }

  onAdd(): void {
    this.matchService.add(this.match).subscribe(data => {
      console.log("Match added")
      this.dialogRef.close()
    })
  }

}
