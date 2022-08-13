import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../../shared/interfaces/game';

@Pipe({
  name: 'sortGames',
})
export class SortGamesPipe implements PipeTransform {
  public transform(items: Game[], sortBy: string): Game[] {
    if (sortBy === 'Name') {
      return items.sort((a: Game, b: Game) => (a.name > b.name ? 1 : -1));
    }

    if (sortBy === 'Score') {
      return items.sort((a: Game, b: Game) => (a.rating > b.rating ? 1 : -1));
    }

    if (sortBy === 'Release Date') {
      return items.sort((a: Game, b: Game) =>
        a.first_release_date > b.first_release_date ? -1 : 1
      );
    }

    return items;
  }
}
