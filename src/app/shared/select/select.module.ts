import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './component/select/select.component';
import { NgxMaskModule } from 'ngx-mask';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    AngularSvgIconModule,
    ReactiveFormsModule,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
