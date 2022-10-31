import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event, ToastEvent, ToastEventLog } from '../models/toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents$: Observable<ToastEvent>;

  toastLogs: ToastEventLog[] = [];

  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents$ = this._toastEvents.asObservable();
  }

  showSuccess(data: ToastEvent) {
    this._toastEvents.next(data);
    this.toastLogs.push({ type: Event.SUCCESS, time: this.getTime() });
  }

  showWarning(data: ToastEvent) {
    this._toastEvents.next(data);
    this.toastLogs.push({ type: Event.WARNING, time: this.getTime() });
  }

  showError(data: ToastEvent) {
    this._toastEvents.next(data);
    this.toastLogs.push({ type: Event.ERROR, time: this.getTime() });
  }

  getTime() {
    return new Date().toLocaleTimeString();
  }
}
