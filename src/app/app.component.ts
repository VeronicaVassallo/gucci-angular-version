import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  notScroll: boolean = true;
  onChildScroll(value: boolean): void {
    this.notScroll = value;
    console.log('valore notScroll: ', value);
  }
}
