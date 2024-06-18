import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProductsService {
  /*Products list*/
  products: { nameBag: string; img: string; price: string }[] = [
    {
      nameBag: 'Borsa piccola',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa Grande',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa media',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'cintura',
      img: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/accessori/gucci/3705/370543CWC1G9643beige-01.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'cintura marrone',
      img: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/accessori/gucci/3705/370543CWC1G9643beige-01.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'cintura nera',
      img: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/accessori/gucci/3705/370543CWC1G9643beige-01.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa piccola',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa Grande',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa media',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa piccola',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa Grande',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
    {
      nameBag: 'Borsa media',
      img: 'https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg',
      price: '1200,00 €',
    },
  ];
  constructor() {}
}
