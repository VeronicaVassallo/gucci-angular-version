import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: string;
  nameProduct: string;
  imgProduct: string;
  price: number;
  category: string;
  description: string;
}

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {
  products: Product[] = [];
  dataFormProduct!: FormGroup;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts(
        'https://gucci-copy-angular-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      )
      .subscribe((data: any) => {
        this.products = Object.keys(data).map((key) => data[key]);
        console.log(this.products);
      });

    this.dataFormProduct = new FormGroup({
      id: new FormControl(null, Validators.required),
      nameProduct: new FormControl(null, Validators.required),
      imgProduct: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onPostData() {
    this.productService
      .insertProduct(
        'https://gucci-copy-angular-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        {
          id: 1,
          nameProduct: 'Borsa Piccola',
          imgProduct:
            'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1683585973/752029_KHNRN_8642_001_052_0000_Light.jpg',
          price: 1500,
          category: 'borse',
          description: 'asdf fgt h jklklkòl',
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  onSubmitForm() {
    console.log('Dati Form:', this.dataFormProduct);
  }

  trackById(index: number, item: Product): string {
    return item.id;
  }

  deleteProduct(id: string) {}

  editProduct(id: string) {}
}
