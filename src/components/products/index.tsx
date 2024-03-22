import Product from 'components/product';
import { buildRows } from 'components/products/utils';
import { Product as ProductType } from 'interfaces/data';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classes from './products.module.scss';

const Products = ({
  products,
  hideLastElement,
}: {
  products: ProductType[];
  hideLastElement: boolean;
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)',
  });
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setColumns(5);
    }
  }, [isDesktopOrLaptop]);

  const rows = buildRows(products, columns);

  return (
    <>
      {rows.map((row, index) => {
        return (
          <ul className={classes.products} key={`row-${index}`}>
            {row.map((a: ProductType, index: number) => {
              const isLastElement = index === row.length - 1;

              return (
                <li key={a.id} className={hideLastElement && isLastElement ? 'hide' : ''}>
                  <Product product={a} />
                </li>
              );
            })}
          </ul>
        );
      })}
    </>
  );
};

export default Products;
