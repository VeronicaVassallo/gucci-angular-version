import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() scrollEvent = new EventEmitter<boolean>();
  notScroll = true; //dato che voglio condividere al padre

  //Decorator: decoratore utilizzato per ascoltare gli eventi dell'host del
  //componente, cioè l'elemento DOM a cui è associato il componente
  // @HostListener('window:scroll', []) 'window:scroll': Specifica che l'evento di scroll della finestra (window) deve essere ascoltato
  //[]: Specifica gli argomenti passati alla funzione di callback. In questo caso, non vengono passati argomenti aggiuntivi.
  /*
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.notScroll = scrollPosition > 100;
    this.scrollEvent.emit(this.notScroll);
  }*/
}
