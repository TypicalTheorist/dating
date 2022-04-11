import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatingComponent } from "./dating/dating.component";
import { MatchesComponent } from "./matches/matches.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DatingComponent
      },
      {
        path: 'matches',
        component: MatchesComponent,
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class DatingRoutingModule {
}
