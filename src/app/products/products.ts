import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  // Cart counter and total (Bonus)
  cartCount: number = 0;
  cartTotal: number = 0;

  // Selected category filter (Bonus)
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];

  // Product array with ngIf availability and category (Bonus)
  products = [
    {
      name: 'Classic White Tee',
      price: 599,
      available: true,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
      tag: 'Bestseller'
    },
    {
      name: 'Slim Fit Jeans',
      price: 1299,
      available: true,
      category: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
      tag: 'New'
    },
    {
      name: 'Floral Summer Dress',
      price: 999,
      available: false,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
      tag: 'Sale'
    },
    {
      name: 'Leather Jacket',
      price: 2499,
      available: true,
      category: 'Outerwear',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
      tag: 'Premium'
    },
    {
      name: 'Casual Hoodie',
      price: 849,
      available: true,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80',
      tag: 'Bestseller'
    },
    {
      name: 'Striped Polo Shirt',
      price: 699,
      available: false,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80',
      tag: 'New'
    },
    {
      name: 'Cargo Shorts',
      price: 749,
      available: true,
      category: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80',
      tag: 'Sale'
    },
    {
      name: 'Wool Scarf',
      price: 399,
      available: true,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80',
      tag: 'New'
    },
  ];

  // Returns filtered products based on selected category (Bonus)
  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  // Set active category filter (Bonus)
  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  // Add to cart event binding - alert + counter + total (Bonus)
  addToCart(product: any) {
    this.cartCount++;
    this.cartTotal += product.price;
    alert(product.name + ' added to cart!');
  }
}