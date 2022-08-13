import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Game } from '../shared/interfaces/game';
import { FilterItems } from '../shared/interfaces/filter-items';

@Injectable({
  providedIn: 'root',
})
export class GamesService implements OnDestroy {
  public gameList$: BehaviorSubject<Game[] | undefined> = new BehaviorSubject<
    Game[] | undefined
  >(undefined);
  public filterValue$: Subject<FilterItems> = new Subject<FilterItems>();
  private subscription$: Subscription = new Subscription();

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    this.setGameIntoGameList();
  }

  public getAllGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.baseUrl}/applicant-test/`);
  }

  private setGameIntoGameList(): void {
    this.subscription$ = this.getAllGames().subscribe((games: Game[]) => {
      this.gameList$.next(games);
    });
  }

  public ngOnDestroy(): void {
    this.setGameIntoGameList();
  }
}
