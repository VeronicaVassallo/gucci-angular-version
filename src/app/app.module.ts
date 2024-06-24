import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { MessageBallonComponent } from './message-ballon/message-ballon.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ReactiveFormsModule } from '@angular/forms';

//Services
import { DataProductsService } from './services/data-products.service';
import { UsersService } from './services/users.service';
import { SessionService } from './services/session.service';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//pages
import { BackOfficeComponent } from './back-office/back-office.component';
import { HomeComponent } from './home/home.component';

//http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    VideoSectionComponent,
    MessageBallonComponent,
    BackOfficeComponent,
    HomeComponent,
    ModalLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    DataProductsService,
    UsersService,
    SessionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
