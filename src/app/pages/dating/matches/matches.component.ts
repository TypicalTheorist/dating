import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DateCard } from "../date-card.interface";
import { DatingService } from "../dating.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: [ './matches.component.scss' ]
})
export class MatchesComponent implements OnInit {

  public matchingList$: Observable<DateCard[] | undefined> = this.datingService.getMatchingList();

  constructor(
    private datingService: DatingService,
  ) {
  }

  ngOnInit(): void {
  }

}
