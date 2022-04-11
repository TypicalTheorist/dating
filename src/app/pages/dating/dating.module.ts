import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { DatingComponent } from './dating/dating.component';
import { DatingRoutingModule } from "./dating-routing.module";
import { MatchesComponent } from './matches/matches.component';


@NgModule({
  declarations: [
    DatingComponent,
    MatchesComponent
  ],
  imports: [
    CommonModule,
    DatingRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class DatingModule {
}
