export enum Event {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ToastEvent {
  type: Event;
  buttonText: string;
  bodyCopy: string;
  header: string;
  headerColor: string;
  bodyColor: string;
}
