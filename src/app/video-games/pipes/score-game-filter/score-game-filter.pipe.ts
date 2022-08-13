import { Pipe, PipeTransform } from '@angular/core';
import { Score } from '../../../shared/interfaces/score';
import { Game } from '../../../shared/interfaces/game';

@Pipe({
  name: 'scoreGameFilter',
})
export class ScoreGameFilterPipe implements PipeTransform {
  public transform(items: Game[], score: Score): Game[] {
    if (!Object.keys(score).length) return items;

    return items.filter((item: Game) => {
      const rating = this.convertScore(item.rating);

      return (
        (rating === score.min && isNaN(score.max || NaN)) ||
        (rating >= (score.min || 0) && rating <= (score.max || 0))
      );
    });
  }

  private convertScore(num: number): number {
    return Math.round(num / 10);
  }
}
