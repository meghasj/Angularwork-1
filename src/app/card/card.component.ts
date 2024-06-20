import { Component, Input } from '@angular/core';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: Product = {
    id: 0,
    title: "",
    description: "",
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    weight: 0
  };
}
