import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() public control!: FormControl | AbstractControl;
  @Input() public placeholder: string = 'Enter your text here...';
  @Input() public label: string = '';
  @Input() public mask: string = '';
  @Input() public format: string = '';
  @Input() public isRequired: boolean = false;
}
