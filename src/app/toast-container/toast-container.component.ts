import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { ToastEvent, ToastEventsWithIndex } from '../toast/toast.types';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  toastStack: ToastEventsWithIndex[] = [];

  constructor(
    private toastService: ToastService,
    private changeDetRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    let eventIndex = -1;
    this.toastService.toastEvents$.subscribe((toast) => {
      eventIndex++;
      console.log('count is', eventIndex);
      const currentToast: ToastEvent = toast;
      this.toastStack.push({ event: currentToast, index: eventIndex });
      this.changeDetRef.detectChanges();
    });
  }

  disposeToast(index: number) {
    // this.toastStack.splice(index, 1);
    // this.changeDetRef.detectChanges();
    // console.log('disposed toast with index', index);
    this.toastStack = this.toastStack.filter((toast) => toast.index != index);
    console.log(this.toastStack);
    this.changeDetRef.detectChanges();
    console.log('disposed toast with index', index);
  }
}
