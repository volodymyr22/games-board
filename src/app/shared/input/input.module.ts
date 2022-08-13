import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componen/input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    AngularSvgIconModule,
    ReactiveFormsModule,
  ],
  exports: [InputComponent],
})
export class InputModule {}
