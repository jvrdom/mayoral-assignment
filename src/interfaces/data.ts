export type Product = {
  id: number;
  title: string;
  price: number;
  discount: number;
  moreColors: boolean;
  image: string;
};

export type Data = {
  products: Product[];
};
