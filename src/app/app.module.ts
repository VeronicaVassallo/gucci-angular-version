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

//Services
import { DataProductsService } from './services/data-products.service';
import { MessageBallonComponent } from './message-ballon/message-ballon.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), DataProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
