import { Component, Input } from '@angular/core';
import { Game } from '../../shared/interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() public game!: Game;

  public convertRating(rating: number): number {
    return Math.round(rating / 10);
  }
}
