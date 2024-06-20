import { Component } from '@angular/core';
import { Product } from '../../models/products.interface';
import { category } from '../../models/category.interface';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [CardComponent]
})
export class ProductsComponent {
  categories: category[] = [];
  loading: boolean = true;

  constructor() {
    this.fetchData();
  }

  async fetchData() {
    const url = 'https://dummyjson.com/products';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();

      const categoryNames = ['beauty', 'groceries', 'fragrances', 'furniture'];
      const categoryLabels = ['Beauty Products', 'Groceries', 'Fragrances', 'Furniture'];

      this.categories = categoryNames.map((categoryName, index) => {
        const products = data.products
          .filter((product: Product) => product.category === categoryName)
          .sort((a: { weight: number; }, b: { weight: number; }) => a.weight - b.weight);
        return {
          name: categoryLabels[index],
          products
        };
      });

      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


}