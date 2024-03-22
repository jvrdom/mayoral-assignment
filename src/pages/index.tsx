import { IconMinus, IconPlus } from '@tabler/icons-react';

import Products from '@/components/products';
import Search from '@/components/search';
import useSearch from '@/components/search/hook';
import { Data, Product } from '@/interfaces/data';
import { NextPage } from 'next';
import { useState } from 'react';
import classes from './index.module.scss';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data: Data = await res.json();

  return { props: { products: data.products } };
};

const HomePage: NextPage = ({ products }: { products: Product[] }) => {
  const [hideLastElement, setHideLastElement] = useState(false);
  const { query, handleChange } = useSearch();

  const searchFilter = (array: Product[]) => {
    return array.filter((el) => el.title.toLowerCase().includes(query));
  };

  const filtered = searchFilter(products);

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <Search
          onSearch={(value: string) => {
            handleChange(value);
          }}
        />
        <div>
          <IconMinus
            size={48}
            color="#cecece"
            onClick={() => {
              setHideLastElement(true);
            }}
            cursor="pointer"
          />
          <IconPlus
            size={48}
            color="#cecece"
            onClick={() => {
              setHideLastElement(false);
            }}
            cursor="pointer"
          />
        </div>
      </header>
      <Products products={filtered} hideLastElement={hideLastElement} />
    </main>
  );
};

export default HomePage;
