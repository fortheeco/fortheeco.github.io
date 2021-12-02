import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { JoinTheEventComponent } from './components/join-the-event/join-the-event.component';
import { LearnDoCreateComponent } from './components/learn-do-create/learn-do-create.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HowCanYouHelpComponent } from './components/how-can-you-help/how-can-you-help.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    JoinTheEventComponent,
    LearnDoCreateComponent,
    TimelineComponent,
    HowCanYouHelpComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
