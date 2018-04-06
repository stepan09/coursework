import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CoachModule} from "./coach/coach.module";
import {FormsModule} from "@angular/forms";
import {SportsmanModule} from "./sportsman/sportsman.module";
import {StadiumModule} from "./stadium/stadium.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {SportClubModule} from "./sport-club/sport-club.module";
import {OrganizerModule} from "./organizer/organizer.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoachModule,
    SportsmanModule,
    StadiumModule,
    SportClubModule,
    OrganizerModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    SportsmanModule,
    StadiumModule,
    SportClubModule,
    OrganizerModule,
    CoachModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
