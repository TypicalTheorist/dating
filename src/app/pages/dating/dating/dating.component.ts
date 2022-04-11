import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { DatingService } from "../dating.service";
import { DateCard, MatchStatus } from "../date-card.interface";

@Component({
  selector: 'app-dating',
  templateUrl: './dating.component.html',
  styleUrls: [ './dating.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatingComponent {

  private refreshSubject$ = new Subject<void>();

  public card$: Observable<DateCard> = this.refreshSubject$.pipe(
    startWith(true),
    switchMap(() => this.datingService.getNextCard())
  );

  constructor(
    private datingService: DatingService,
  ) {
  }

  public sendReply(id: string, status: MatchStatus): void {
    this.datingService.sendReply(id, status);
    this.refreshSubject$.next();
  }

}
