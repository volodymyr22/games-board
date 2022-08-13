import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevertArrayPipe } from './revert-array/revert-array.pipe';

@NgModule({
  declarations: [RevertArrayPipe],
  imports: [CommonModule],
  exports: [RevertArrayPipe],
})
export class PipesModule {}
