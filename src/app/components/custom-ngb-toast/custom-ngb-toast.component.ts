import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppEventBus } from 'src/app/models/app-event-bus';
import { CustomToastService, ICustomToast } from 'src/app/services/custom-toast/custom-toast.service';
import { EventBusService } from 'src/app/services/event-bus/event-bus.service';

@Component({
  selector: 'app-custom-ngb-toast',
  templateUrl: './custom-ngb-toast.component.html',
  styleUrls: ['./custom-ngb-toast.component.scss']
})
export class CustomNgbToastComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(
    public toastService: CustomToastService,
    private eventBus: EventBusService
  ) { }

  ngOnInit(): void {
    this.listenForToast();
  }

  listenForToast(): void {
    // const sub = this.eventBus.emit(new EventData<any>({ name: AppEventBus.notify.toast, value: { title:  } }))
    const sub = this.eventBus.on(AppEventBus.notify.toast, (x: ICustomToast) => {
      this.toastService.toasts.push(x);
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
