import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { TeamService } from './team/team.service'
import { HttpClientModule } from '@angular/common/http'

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatListModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

import { PlayerListComponent } from './player-component/player-list.component';
import { PlayerAddDialog } from './player-component/player-add-dialog';
import { TeamListComponent } from './team-component/team-list.component';
import { TeamDetailsDialogComponent } from './team-component/team-details-dialog.component';
import { TeamAddDialogComponent } from './team-component/team-add-dialog.component';
import { MatchListComponent } from './match-component/match-list.component';
import { MatchAddDialogComponent } from './match-component/match-add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddDialog,
    TeamListComponent,
    TeamDetailsDialogComponent,
    TeamAddDialogComponent,
    MatchListComponent,
    MatchAddDialogComponent
  ],
  imports:
    [
      BrowserModule,
      HttpClientModule,
      MatTabsModule,
      MatTableModule,
      MatCardModule,
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      BrowserAnimationsModule,
      FormsModule,
      MatDividerModule,
      MatListModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatRadioModule
    ],
  providers: [TeamService],
  bootstrap: [AppComponent],
  entryComponents: [
    PlayerListComponent,
    PlayerAddDialog,
    TeamListComponent,
    TeamDetailsDialogComponent,
    TeamAddDialogComponent,
    MatchAddDialogComponent
  ],
})
export class AppModule { }
