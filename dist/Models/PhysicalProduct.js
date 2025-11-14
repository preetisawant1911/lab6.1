"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
// src/models/PhysicalProduct.ts
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // Override tax calculation (10% tax)
    getPriceWithTax() {
        return this.price * 1.1;
    }
    // Getter for formatted weight
    get formattedWeight() {
        return `${this.weight} kg`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
