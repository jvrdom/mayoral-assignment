import Button from '@/components/button';
import { Product } from '@/interfaces/data';
import Image from 'next/image';
import Link from 'next/link';
import classes from './product.module.scss';

const Product = ({ product }: { product: Product }) => {
  const { title, image, discount, price, newPrice } = product;

  return (
    <article className={classes.product} data-testid="product-card">
      <header>
        <figure>
          <Image src={image} alt={title} priority fill />
        </figure>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
      </header>
      <div className="price-container">
        <p className={`price ${price !== newPrice ? 'old' : ''}`}>{price}€</p>
        {price !== newPrice && (
          <p className="price discount">{`${newPrice.toFixed(2)}€ (-${discount}%)`}</p>
        )}
      </div>
      <div className="button-container">
        {product.hasMoreColors && (
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
