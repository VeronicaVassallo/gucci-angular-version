import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.checkSession();
  }
  //TODO --> tp remove and import inside homePage.ts
  notScroll: boolean = true;
  onChildScroll(value: boolean): void {
    this.notScroll = value;
  }
}
