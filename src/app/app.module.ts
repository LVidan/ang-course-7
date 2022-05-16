import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
