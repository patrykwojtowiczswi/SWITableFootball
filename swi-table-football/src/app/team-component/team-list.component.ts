import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team/team.service';
import { ITeam } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { TeamDetailsDialogComponent } from './team-details-dialog.component';
import { TeamAddDialogComponent } from './team-add-dialog.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: ITeam[]

  displayedColumns: string[] = ['position', 'name', 'rating'];

  constructor(private teamService: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(data => {
      this.teams = data;
    })
  }

  displayDetails(row): void {
    const dialogRef = this.dialog.open(TeamDetailsDialogComponent, {
      width: '400px',
      data: row
    })
  }

  addTeam(): void {
    const dialogRef = this.dialog.open(TeamAddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.teamService.getAll().subscribe(data => {
        this.teams = data
        console.log(this.teams)
      })
    });
  }
}
