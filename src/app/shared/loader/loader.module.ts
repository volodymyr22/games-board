import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader/loader.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
