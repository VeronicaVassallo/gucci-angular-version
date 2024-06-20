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

//Services
import { DataProductsService } from './services/data-products.service';
import { UsersService } from './services/users.service';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

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
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [provideClientHydration(), DataProductsService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
