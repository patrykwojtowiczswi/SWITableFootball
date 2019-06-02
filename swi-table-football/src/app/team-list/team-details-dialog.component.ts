import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ITeam } from '../interfaces';

@Component({
  selector: 'app-team-details-dialog',
  templateUrl: './team-details-dialog.component.html',
  styleUrls: ['./team-details-dialog.component.css']
})
export class TeamDetailsDialogComponent implements OnInit {

  team: ITeam

  constructor(
    public dialogRef: MatDialogRef<TeamDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITeam) {
    console.log(data);
    this.team = data;

  }

  ngOnInit() {
  }

}
