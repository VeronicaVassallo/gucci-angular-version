import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../commonStyle.css'],
})
export class NavComponent {
  menuInvisible = true;
  searchInvisible = true;

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
      img: 'https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG',
      price: '1200,00 €',
    },
    {
      nameBag: 'cintura marrone',
      img: 'https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG',
      price: '1200,00 €',
    },
    {
      nameBag: 'cintura nera',
      img: 'https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG',
      price: '1200,00 €',
    },
  ];

  productsFiltered: { nameBag: string; img: string; price: string }[] = [];

  /*Show menu from nav */
  showMenu() {
    this.menuInvisible = !this.menuInvisible;
  }

  /*Show search from nav */
  showSearch() {
    this.searchInvisible = !this.searchInvisible;
  }

  /*method for filter array products */
  onChangeValue(e: Event) {
    if ((<HTMLInputElement>e.target).value.trim() === '') {
      this.productsFiltered = [];
    } else {
      this.productsFiltered = this.products
        .filter((product) => {
          return product.nameBag
            .toLowerCase()
            .includes((<HTMLInputElement>e.target).value.toLowerCase());
        })
        .slice(0, 6);
    }
  }
}
