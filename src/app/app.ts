import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'ThreadHouse Clothing';

  products = [
    { name: 'Classic White Tee', price: 599, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', tag: 'Bestseller' },
    { name: 'Slim Fit Jeans', price: 1299, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', tag: 'New' },
    { name: 'Floral Summer Dress', price: 999, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80', tag: 'Sale' },
    { name: 'Leather Jacket', price: 2499, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', tag: 'Premium' },
    { name: 'Casual Hoodie', price: 849, image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', tag: 'Bestseller' },
    { name: 'Striped Polo Shirt', price: 699, image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80', tag: 'New' },
  ];
}