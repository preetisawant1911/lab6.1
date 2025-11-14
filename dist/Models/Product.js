"use strict";
// src/models/Product.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Abstract base class for all products
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    // Display product details
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }
}
exports.Product = Product;
