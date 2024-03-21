import Button from 'components/button';
import { Product } from 'interfaces/data';
import Image from 'next/image';
import Link from 'next/link';
import classes from './product.module.scss';

function calculateDiscount(originalPrice: number, discount: number) {
  return originalPrice - (originalPrice * discount) / 100;
}

const Product = ({ product }: { product: Product }) => {
  const { title, image, discount, price } = product;

  return (
    <article className={classes.product}>
      <header>
        <div className="image">
          <Image src={image} fill alt={title} priority />
        </div>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
      </header>
      <div className="price-container">
        <p className={`price ${discount > 0 ? 'old' : ''}`}>{price}€</p>
        {discount > 0 && (
          <p className="price discount">{`${calculateDiscount(price, discount).toFixed(
            2,
          )}€ (-${discount}%)`}</p>
        )}
      </div>
      <div className="button-container">
        {product.moreColors && (
          <div className="link">
            <Link href="/">más colores</Link>
          </div>
        )}
        <Button>Añadir</Button>
      </div>
    </article>
  );
};

export default Product;
