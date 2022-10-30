import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { ToastEvent } from '../toast/toast.types';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent implements OnInit {
  toastStack: ToastEvent[] = [];

  constructor(
    private toastService: ToastService,
    private changeDetRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents$.subscribe((toast) => {
      const currentToast: ToastEvent = toast;
      this.toastStack.push(currentToast);
      this.changeDetRef.detectChanges();
    });
  }

  dispose(index: number) {
    this.toastStack.splice(index, 1);
    this.changeDetRef.detectChanges();
  }
}
