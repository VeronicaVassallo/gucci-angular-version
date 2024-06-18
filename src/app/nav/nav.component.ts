import { Component, Input } from '@angular/core';

//services
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private allProducts: DataProductsService) {}
  @Input() dataParent: boolean = true;
  valueInput = '';
  menuInvisible = true;
  searchInvisible = true;
  result = true;

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
  onChangeValue(word: string) {
    this.valueInput = word;
    if (this.valueInput.trim() === '') {
      this.productsFiltered = [];
    } else {
      this.productsFiltered = this.allProducts.products
        .filter((product) => {
          return product.nameBag
            .toLowerCase()
            .includes(this.valueInput.toLowerCase());
        })
        .slice(0, 9);

      this.result = this.productsFiltered.length !== 0;
    }
  }

  onDeleteValue() {
    this.valueInput = '';
    this.productsFiltered = [];
    this.result = true;
  }
}
