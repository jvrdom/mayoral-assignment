export type Product = {
  id: number;
  title: string;
  price: number;
  discount: number;
  hasMoreColors: boolean;
  image: string;
  newPrice: number;
};

export type Data = {
  products: Product[];
};
