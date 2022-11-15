import { createProduct, calcStock, products } from './product.service';

/**
 * Se importan las funciones y la variables de otro archivo
 */

createProduct({
  name: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 5
});
createProduct({
  name: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'XL'
});
const total = calcStock();

console.log(products);
console.log(total);
