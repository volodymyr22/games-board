import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGamesRoutingModule } from './video-games-routing.module';
import { GamesPageComponent } from './games-page/games-page.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../shared/select/select.module';
import { InputModule } from '../shared/input/input.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoaderModule } from '../shared/loader/loader.module';
import { SearchGamePipe } from './pipes/search-game/search-game.pipe';
import { PipesModule } from '../shared/pipes/pipes.module';
import { SortGamesPipe } from './pipes/sort-games/sort-games.pipe';
import { ScoreGameFilterPipe } from './pipes/score-game-filter/score-game-filter.pipe';

@NgModule({
  declarations: [
    GamesPageComponent,
    FilterBoxComponent,
    GamesListComponent,
    GameComponent,
    SearchGamePipe,
    SortGamesPipe,
    ScoreGameFilterPipe,
  ],
  imports: [
    CommonModule,
    VideoGamesRoutingModule,
    ReactiveFormsModule,
    SelectModule,
    InputModule,
    AngularSvgIconModule,
    LoaderModule,
    PipesModule,
  ],
})
export class VideoGamesModule {}
