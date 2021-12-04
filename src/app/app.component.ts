import { Component, OnInit } from '@angular/core';
import { EventBusService } from './services/event-bus/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecosummit';

  constructor(private eventBus: EventBusService) {

  }

  ngOnInit(): void {

  }
}
