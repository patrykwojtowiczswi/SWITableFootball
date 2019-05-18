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

  teams: ITeam[]
  matches: IMatch[]
  players: IPlayer[]

  constructor(
    private teamService: TeamService,
    private matchService: MatchService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(data => {
      this.teams = data
      console.log(this.teams)
    })
    this.playerService.getAll().subscribe(data => {
      this.players = data
      console.log(this.players)
    })
    this.matchService.getAll().subscribe(data => {
      this.matches = data
      console.log(this.matches)
    })
  }
}
