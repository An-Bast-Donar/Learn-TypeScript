/**
 * Los diferentes types se pueden declarar en uno o varios archivos de modulos y con la palabra reservada export ser exportados a otras partes del proyecto
 */
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
};
