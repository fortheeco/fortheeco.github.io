import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { HowCanYouHelpComponent } from './components/how-can-you-help/how-can-you-help.component';
import { JoinTheEventComponent } from './components/join-the-event/join-the-event.component';
import { LearnDoCreateComponent } from './components/learn-do-create/learn-do-create.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NgbModalModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { MakeDonationsComponent } from './modals/make-donations/make-donations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomErrorMessageComponent } from './components/custom-error-message/custom-error-message.component';
import { CustomErrorService } from './services/custom-error/custom-error.service';
import { FlutterwaveModule } from "flutterwave-angular-v3"
import { EventBusService } from './services/event-bus/event-bus.service';
import { CustomToastService } from './services/custom-toast/custom-toast.service';
import { CustomNgbToastComponent } from './components/custom-ngb-toast/custom-ngb-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    JoinTheEventComponent,
    HowCanYouHelpComponent,
    ContactUsComponent,
    LearnDoCreateComponent,
    TimelineComponent,
    MakeDonationsComponent,
    CustomErrorMessageComponent,
    CustomNgbToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    ReactiveFormsModule,
    FlutterwaveModule,
    NgbToastModule,
  ],
  providers: [
    CustomErrorService,
    EventBusService,
    CustomToastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
