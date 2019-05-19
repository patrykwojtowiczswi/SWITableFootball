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
import { MatInputModule } from '@angular/material';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddDialog } from './player-list/player-add-dialog';

@NgModule({
  declarations: [AppComponent, PlayerListComponent, PlayerAddDialog],
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
      FormsModule
    ],
  providers: [TeamService],
  bootstrap: [AppComponent],
  entryComponents: [PlayerListComponent, PlayerAddDialog],
})
export class AppModule { }
