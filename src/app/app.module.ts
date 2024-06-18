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

//Services
import { DataProductsService } from './services/data-products.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), DataProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
