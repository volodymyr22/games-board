import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Observable, Subscription } from 'rxjs';
import { Game } from '../../shared/interfaces/game';
import { Score } from '../../shared/interfaces/score';
import { FilterItems } from '../../shared/interfaces/filter-items';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  public gameList$: Observable<Game[]> = new Observable<Game[]>();
  public searchTex: string = '';
  public isRevert!: boolean;
  public score: Score = {};
  public sortBy: string = '';
  public subscription: Subscription = new Subscription();

  constructor(private gameService: GamesService) {}

  public ngOnInit(): void {
    this.getAllGames();
    this.updateFilterValues();
  }

  private getAllGames(): void {
    this.gameList$ = this.gameService.gameList$ as Observable<Game[]>;
  }

  private updateFilterValues(): void {
    this.subscription = this.gameService.filterValue$.subscribe(
      (filterValue: FilterItems) => {
        this.searchTex = filterValue.name;
        this.isRevert = filterValue.isRevert;
        this.score = this.transformScore(filterValue.minScore);
        this.sortBy = filterValue.orderBy;
      }
    );
  }

  private transformScore(str: string): Score {
    if (!str) {
      return {};
    }

    const arr = str?.split('');
    const min = arr[0] == '1' && arr[1] == '0' ? +(arr[0] + arr[1]) : +arr[0];
    const max =
      arr[1] != '0' && !!arr[2]
        ? +(arr[1] + arr[2])
        : arr[2] == '1' && arr[3] == '0'
        ? +(arr[2] + arr[3])
        : +arr[1];

    return { min, max };
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
