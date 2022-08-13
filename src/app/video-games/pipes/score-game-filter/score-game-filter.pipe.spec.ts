import { ScoreGameFilterPipe } from './score-game-filter.pipe';

describe('ScoreFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ScoreGameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
