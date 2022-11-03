import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { ToastEvent, ToastEventsWithIndex } from '../../models/toast.types';
import { filter, Observable, of, startWith } from 'rxjs';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent implements OnInit {
  toastStack: ToastEventsWithIndex[] = [];

  toastEvents$ = this.toastService.toastEvents$;

  @ViewChild('toast')
  toastComponent!: ElementRef;

  // @ViewChildren('toastsRef')
  // toastsRef!: QueryList<ElementRef>;

  @ViewChildren('toasts')
  toastComp!: QueryList<ElementRef>;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  disposeToast() {}

  trackByIndex(index: number) {
    return index;
  }
}
