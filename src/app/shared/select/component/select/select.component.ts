import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() public list: string[] = [];
  @Output() public revert: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public select: EventEmitter<string> = new EventEmitter<string>();

  public currentItem$: Observable<string> = new Observable<string>();
  public selectedItem: string = '';
  public isRevert: boolean = false;
  public isOpen: boolean = false;

  public ngOnInit(): void {
    this.setInitialValue();
  }

  public selectItem(item: string): void {
    this.selectedItem = item;
    this.select.next(this.selectedItem);
  }

  public changeDirection(): void {
    this.isRevert = !this.isRevert;
    this.revert.emit(this.isRevert);
  }

  private setInitialValue(): void {
    if (this.list.length) {
      this.selectedItem = this.list[0];
      this.select.next(this.selectedItem);
    }
  }
}
