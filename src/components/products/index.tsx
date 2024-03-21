import Product from 'components/product';
import classes from './products.module.scss';
import { Product as ProductType } from 'interfaces/data';

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <ul className={classes.products}>
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
