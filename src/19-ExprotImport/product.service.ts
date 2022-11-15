import { Product } from './product.model';

/**
 * Se importan los types y se exportan las funciones y la variable
 */

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}
