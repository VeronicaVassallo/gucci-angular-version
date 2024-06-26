import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../enviroments/enviroment';

interface Product {
  nameProduct: string;
  //imgProduct: string; --> REMENBER : When backand use entity with img you can remove comment
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
  url: string = environment.ANGULAR_APP_SERVER_BASE_URL;
  productFireBase: any;
  products: Product[] = [];
  dataFormProduct!: FormGroup;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts(this.url).subscribe((data: any) => {
      this.products = Object.keys(data).map((key) => data[key]);
      /*
      this.proucti = lista di questo oggetto
      questo oggetto:
      key: key
      data: data[key]

      let keys = Object.keys(data);

      */
      this.productFireBase = data;
      console.log('productFireBase', data);
      console.log('prodotto che ottengo', this.products);
    });

    this.dataFormProduct = new FormGroup({
      nameProduct: new FormControl(null, Validators.required),
      //  imgProduct: new FormControl(null, Validators.required), --> REMENBER : When backand use entity with img you can remove comment
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onSubmitForm() {
    const formData = this.dataFormProduct.value;
    this.productService
      .insertProduct(this.url, {
        nameProduct: formData.nameProduct,
        //  imgProduct: formData.imgProduct, --> REMENBER : When backand use entity with img you can remove comment
        price: formData.price,
        category: formData.category,
        description: formData.description,
      })
      .subscribe({
        next: (data) => {
          console.log('Dati inseriti:', data);
          alert('Prodotto Aggiunto');
          window.location.reload();
        },
        error: (error) => {
          console.error("Errore durante l'inserimento:", error);
        },
      });
  }

  deleteProduct() {
    //REMEMBER: change data of deleteProduct when I will have a real databse
    this.productService
      .deleteProduct(
        'https://gucci-copy-angular-default-rtdb.europe-west1.firebasedatabase.app/products',
        '-O0IVmyVCiz5xSMyRQeU'
      )
      .subscribe((data) => {
        console.log('data of delete product', data);
      });
  }

  editProduct(id: string) {}
}
