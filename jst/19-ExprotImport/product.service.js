"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.createProduct = exports.products = void 0;
/**
 * Se importan los types y se exportan las funciones y la variable
 */
exports.products = [];
const createProduct = (data) => {
    exports.products.push(data);
};
exports.createProduct = createProduct;
const calcStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calcStock = calcStock;
