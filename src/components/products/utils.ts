import { Product } from 'interfaces/data';

export function buildRows(products: Product[], columns: number) {
  const productsCopy = [...products];
  const arrays = [];

  while (productsCopy.length > 0) {
    arrays.push(productsCopy.splice(0, columns));
  }

  return arrays;
}
