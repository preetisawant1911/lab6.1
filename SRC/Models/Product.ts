// src/models/Product.ts

// Abstract base class for all products
export abstract class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

  // Display product details
  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
  }

  // Abstract method for tax calculation
  abstract getPriceWithTax(): number;
}
