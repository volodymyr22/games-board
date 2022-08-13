import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revertArray',
})
export class RevertArrayPipe implements PipeTransform {
  private isInit: boolean = true;

  public transform<T>(items: T[], isRevert: boolean): T[] {
    if (this.isInit) {
      this.isInit = false;
      return items;
    }
    return items.reverse();
  }
}
