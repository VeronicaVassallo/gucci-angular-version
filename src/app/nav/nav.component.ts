import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../commonStyle.css'],
})
export class NavComponent {
  menuInvisible = true;
  searchInvisible = true;
  result = true;

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
        .slice(0, 9);

      if (this.productsFiltered.length === 0) {
        this.result = false;
      } else {
        this.result = true;
      }
    }
  }

  onDeleteValue() {
    this.productsFiltered = [];
  }
}
