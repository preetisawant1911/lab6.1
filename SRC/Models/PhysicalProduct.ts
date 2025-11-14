// src/models/PhysicalProduct.ts
import { Product } from "./Product";

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  // Override tax calculation (10% tax)
  getPriceWithTax(): number {
    return this.price * 1.1;
  }

  // Getter for formatted weight
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }
}
