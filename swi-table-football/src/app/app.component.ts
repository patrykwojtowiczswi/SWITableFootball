import { Component } from '@angular/core'
import { TeamService } from './team/team.service';
import { ITeam, IMatch, IPlayer } from './interfaces';
import { PlayerService } from './player/player.service';
import { MatchService } from './match/match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'swi-table-football'

  constructor() { }

  ngOnInit() {
  }
}
