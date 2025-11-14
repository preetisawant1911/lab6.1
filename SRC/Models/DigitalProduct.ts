// src/models/DigitalProduct.ts
import { Product } from "./Product";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number
  ) {
    super(sku, name, price);
  }

  // Override tax calculation (no tax for digital products)
  getPriceWithTax(): number {
    return this.price;
  }

  // Getter for formatted file size
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }
}
