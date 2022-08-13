import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { scoreValueValidator } from '../../shared/utils/validators';
import { GamesService } from '../../services/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent implements OnInit, OnDestroy {
  public filterForm!: FormGroup;
  public orderList: string[] = ['Release Date', 'Score', 'Name'];
  private orderBy: string = '';
  private isRevert: boolean = false;
  private subscription$: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private gamesService: GamesService) {}

  public ngOnInit(): void {
    this.buildForm();
    this.initFilterForm();
  }

  private initFilterForm(): void {
    this.subscription$ = this.filterForm.valueChanges.subscribe(() => {
      this.updateFilters();
    });
  }

  public selectOrderItem(orderItem: string): void {
    this.orderBy = orderItem;
    this.updateFilters();
  }

  public revertList(isRevert: boolean): void {
    this.isRevert = isRevert;
    this.updateFilters();
  }

  public clearFilter(): void {
    this.filterForm.reset();
    this.updateFilters();
  }

  private buildForm(): void {
    this.filterForm = this.fb.group({
      name: [null],
      minScore: [null, scoreValueValidator],
    });
  }

  private updateFilters(): void {
    this.gamesService.filterValue$.next({
      ...this.filterForm.value,
      isRevert: this.isRevert,
      orderBy: this.orderBy,
    });
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
