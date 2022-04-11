import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable, of, tap } from "rxjs";

import { DateCard, MatchStatus, MatchStatusEnum } from "./date-card.interface";

@Injectable({
  providedIn: 'root'
})
export class DatingService {

  private cards: DateCard[] = [];

  private matchList: { id: string, status: MatchStatus }[] = [];

  constructor(
    private http: HttpClient,
  ) {
    new Promise(resolve => {
      this.getCards().subscribe(res => this.cards = res);
    })
  }

  public init(): Promise<DateCard[] | undefined> {
    return firstValueFrom(this.getCards().pipe(
      tap((cards: DateCard[]) => {
        this.cards = cards;
      }),
    ));
  }

  public getCards(): Observable<DateCard[]> {
    return this.http.get<DateCard[]>('/assets/data.json');
  }

  public getNextCard(actualId: string = ''): Observable<DateCard> {
    const actualCards = this.cards.filter(card =>
      card.id !== actualId && !this.matchList.find(item => item.id === card.id)
    );
    const index = Math.floor(Math.random() * actualCards.length);
    return of(actualCards[index]);
  }

  public sendReply(cardId: string, status: MatchStatus): void {
    this.matchList.push({
      id: cardId,
      status,
    });
  }

  public getMatchingList(): Observable<DateCard[] | undefined> {
    const matchingList = this.cards.filter(card =>
      this.matchList.filter(item => item.status === MatchStatusEnum.Matched)
        .find(item => item.id === card.id)
    );
    return of(matchingList.length ? matchingList : undefined);
  }
}

export function InitDatingService(datingService: DatingService) {
  return () => datingService.init;
}
