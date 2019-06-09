import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match/match.service';
import { IMatch } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatchAddDialogComponent } from './match-add-dialog.component';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: IMatch[]

  displayedColumns: string[] = ['TeamOne', 'TeamTwo']

  constructor(private matchService: MatchService, public dialog: MatDialog) { }

  ngOnInit() {
    this.matchService.getAll().subscribe(data => {
      this.matches = data;
    })
  }

  addMatch(): void {
    const dialogRef = this.dialog.open(MatchAddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.matchService.getAll().subscribe(data => {
        this.matches = data
      })
    });
  }

}
