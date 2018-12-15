import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailContentComponent } from './mail-content/mail-content.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SentComponent } from './sent/sent.component';
import { AllMailComponent } from './all-mail/all-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MailContentComponent,
    InboxComponent,
    DraftsComponent,
    SentComponent,
    AllMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    NgbModule,
    NgbButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
