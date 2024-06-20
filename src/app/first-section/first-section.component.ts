import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css',
})
export class FirstSectionComponent {
  dataFirstSection: { category: string; title: string; typeSection: string }[] =
    [
      {
        category: 'Uomo',
        title: 'Pre-Fall 2024',
        typeSection: 'ESPLORA LA COLLEZIONE UOMO',
      },
      {
        category: 'Donna',
        title: 'Pre-Fall 2024',
        typeSection: 'ESPLORA LA COLLEZIONE Donna',
      },
    ];
}
