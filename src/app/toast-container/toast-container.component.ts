import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { ToastEvent, ToastEventsWithIndex } from '../toast/toast.types';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  toastStack: ToastEventsWithIndex[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    let eventIndex = -1;
    this.toastService.toastEvents$.subscribe((toast) => {
      eventIndex++;
      const currentToast: ToastEvent = toast;
      this.toastStack.push({ event: currentToast, index: eventIndex });
    });
  }

  disposeToast(index: number) {
    this.toastStack = this.toastStack.filter((toast) => toast.index != index);
  }
}
