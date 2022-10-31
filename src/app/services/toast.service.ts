import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  DefaultToastConfig,
  Event,
  ToastEvent,
  ToastEventLog,
  ToastMessage,
} from '../models/toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  DEFAULT_CONFIG_SUCCESS: DefaultToastConfig = {
    headerColor: '#d4edda',
    bodyColor: '#198754',
  };

  DEFAULT_CONFIG_WARNING: DefaultToastConfig = {
    headerColor: '#fff3cd',
    bodyColor: '#ffc107',
  };

  DEFAULT_CONFIG_ERROR: DefaultToastConfig = {
    headerColor: '#f8d7da',
    bodyColor: '#dc3545',
  };

  toastEvents$: Observable<ToastEvent>;

  toastLogs: ToastEventLog[] = [];

  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents$ = this._toastEvents.asObservable();
  }

  showSuccess(header: string, body: string) {
    this._show(
      { header, body, type: Event.SUCCESS },
      { ...this.DEFAULT_CONFIG_SUCCESS }
    );
    this.toastLogs.push({ type: Event.SUCCESS, time: this.getTime() });
  }

  showWarning(header: string, body: string) {
    this._show(
      { header, body, type: Event.WARNING },
      { ...this.DEFAULT_CONFIG_WARNING }
    );
    this.toastLogs.push({ type: Event.WARNING, time: this.getTime() });
  }

  showError(header: string, body: string) {
    this._show(
      { header, body, type: Event.ERROR },
      { ...this.DEFAULT_CONFIG_ERROR }
    );
    this.toastLogs.push({ type: Event.ERROR, time: this.getTime() });
  }

  private _show(message: ToastMessage, defaultConfig: DefaultToastConfig) {
    const config = { ...message, ...defaultConfig };
    this._toastEvents.next(config);
  }

  getTime() {
    return new Date().toLocaleTimeString();
  }
}
