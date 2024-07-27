import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products : {id:number, name: string, price: number, quantity: number }[] = [];
  name : string = '';
  price : number = 0;
  quantity: number = 0;

  addProduct(): void {
    let obj = {
      id : this.Products.length + 1,
      name: this.name,
      price : this.price,
      quantity: this.quantity
    }

    this.Products.push(obj);
  }
}
