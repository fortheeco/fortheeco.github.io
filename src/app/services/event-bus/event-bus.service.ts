import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class EventData<T> {

  constructor({ name, value = undefined }: { name: string; value?: T; }) {
    this.name = name;
    this.value = value;
  }

  public name: string = '';
  public value: any;
}

export class AppState {

  constructor() {
    this.token = '';
  }

  token: string;

}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public static subject$ = new Subject<EventData<any>>();

  private static appState: AppState = new AppState();

  constructor() { }

  emit(event: EventData<any>): void {
    EventBusService.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return EventBusService.subject$.pipe(
      filter((e: EventData<any>) => e.name === eventName),
      map((e: EventData<any>) => e["value"])
    ).subscribe(action);
  }

  getState(): AppState
  {
    return EventBusService.appState;
  }

  clearState(): void {
    EventBusService.appState = null;
  }

}
