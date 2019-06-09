import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match/match.service';
import { IMatch } from '../interfaces';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: IMatch[]

  displayedColumns: string[] = ['TeamOne', 'TeamTwo']

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAll().subscribe(data => {
      this.matches = data;
    })
  }

}
