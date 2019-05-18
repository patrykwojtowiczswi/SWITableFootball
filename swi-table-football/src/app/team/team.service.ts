import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { ITeam, IAddTeam } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ITeam[]> {
    return this.httpClient.get<ITeam[]>(environment.baseUrl + '/teams');
  }

  getById(id: number): Observable<ITeam> {
    return this.httpClient.get<ITeam>(environment.baseUrl + '/teams/' + id);
  }

  add(team: IAddTeam): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + '/teams', team);
  }
}
