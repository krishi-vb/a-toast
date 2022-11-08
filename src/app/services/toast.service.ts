import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  toastEvents$: Observable<ToastEvent[]>;
  toastLogs$: Observable<ToastEventLog[]>;

  private _toastEvents = new BehaviorSubject<ToastEvent[]>([]);
  private _toastLogs$ = new BehaviorSubject<ToastEventLog[]>([]);

  constructor() {
    this.toastEvents$ = this._toastEvents.asObservable();
    this.toastLogs$ = this._toastLogs$.asObservable();
  }

  showSuccess(header: string, body: string) {
    this._show(
      { header, body, type: Event.SUCCESS },
      { ...this.DEFAULT_CONFIG_SUCCESS },
      Math.round(Math.random() * 10000)
    );

    const log: ToastEventLog = { type: Event.SUCCESS, time: this.getTime() };

    this._toastLogs$.next([...this._toastLogs$.getValue(), log]);
  }

  showWarning(header: string, body: string) {
    this._show(
      { header, body, type: Event.WARNING },
      { ...this.DEFAULT_CONFIG_WARNING },
      Math.round(Math.random() * 10000)
    );

    const log = { type: Event.WARNING, time: this.getTime() };
    this._toastLogs$.next([...this._toastLogs$.getValue(), log]);
  }

  showError(header: string, body: string) {
    this._show(
      { header, body, type: Event.ERROR },
      { ...this.DEFAULT_CONFIG_ERROR },
      Math.round(Math.random() * 10000)
    );

    const log = { type: Event.ERROR, time: this.getTime() };
    this._toastLogs$.next([...this._toastLogs$.getValue(), log]);
  }

  private _show(
    message: ToastMessage,
    defaultConfig: DefaultToastConfig,
    toastId: number
  ) {
    const toast = { ...message, ...defaultConfig, toastId };
    this._toastEvents.next([...this._toastEvents.getValue(), toast]);
  }

  closeToast(toastId: number) {
    console.log(this._toastEvents.getValue());
    this._toastEvents.next([
      ...this._toastEvents
        .getValue()
        .filter((event) => event.toastId !== toastId),
    ]);
  }

  getTime() {
    return new Date().toLocaleTimeString();
  }
}
