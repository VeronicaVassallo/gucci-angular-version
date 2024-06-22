import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css',
})
export class FirstSectionComponent {
  listDataFirstSection: {
    category: string;
    title: string;
    img: string;
    typeSection: string;
  }[] = [
    {
      category: 'Uomo',
      title: 'Pre-Fall 2024',
      img: 'section1-2.jpg',
      typeSection: 'ESPLORA LA COLLEZIONE UOMO',
    },
    {
      category: 'Donna',
      title: 'Pre-Fall 2024',
      img: 'section1-4.jpg',
      typeSection: 'ESPLORA LA COLLEZIONE Donna',
    },
  ];
}
