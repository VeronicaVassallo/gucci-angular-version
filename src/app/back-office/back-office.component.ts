import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../enviroments/enviroment';

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
  url: string = environment.ANGULAR_APP_SERVER_BASE_URL;
  products: Product[] = [];
  dataFormProduct!: FormGroup;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts(this.url).subscribe((data: any) => {
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

  onSubmitForm() {
    debugger;
    const formData = this.dataFormProduct.value;
    this.productService
      .insertProduct(this.url, {
        id: formData.id,
        nameProduct: formData.nameProduct,
        imgProduct: formData.imgProduct,
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

  trackById(index: number, item: Product): string {
    return item.id;
  }

  deleteProduct(id: string) {}

  editProduct(id: string) {}
}
