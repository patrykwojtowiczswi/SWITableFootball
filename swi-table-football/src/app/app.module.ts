import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { TeamService } from './team/team.service'
import { HttpClientModule } from '@angular/common/http'

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddDialog } from './player-list/player-add-dialog';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailsDialogComponent } from './team-list/team-details-dialog.component';

@NgModule({
  declarations: [AppComponent, PlayerListComponent, PlayerAddDialog, TeamListComponent, TeamDetailsDialogComponent],
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
      MatListModule
    ],
  providers: [TeamService],
  bootstrap: [AppComponent],
  entryComponents: [PlayerListComponent, PlayerAddDialog, TeamListComponent, TeamDetailsDialogComponent],
})
export class AppModule { }
