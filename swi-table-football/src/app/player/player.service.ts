import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { IPlayer, IAddPlayer } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPlayer[]> {
    return this.httpClient.get<IPlayer[]>(environment.baseUrl + '/players');
  }

  add(player: IAddPlayer): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + '/players', player);
  }
}
