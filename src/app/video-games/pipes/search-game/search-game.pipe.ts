import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../../shared/interfaces/game';

@Pipe({
  name: 'searchGame',
})
export class SearchGamePipe implements PipeTransform {
  public transform(items: Game[], searchText: string): Game[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter((item: Game) => {
      return Object.keys(item).some((key: string) => {
        if (key === 'name' && Object.keys(item).length) {
          return String(item[key])
            .toLowerCase()
            .includes(searchText.toLowerCase());
        }
        return '';
      });
    });
  }
}
