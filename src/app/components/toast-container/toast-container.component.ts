import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent implements OnInit {
  toastEvents$ = this.toastService.toastEvents$;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  trackByIndex(index: number) {
    return index;
  }
}
