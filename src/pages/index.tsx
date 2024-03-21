import { IconPlus, IconMinus } from '@tabler/icons-react';

import Products from 'components/products';
import Search from 'components/search';
import { Data, Product } from 'interfaces/data';
import { NextPage } from 'next';
import { useState } from 'react';
import classes from './index.module.scss';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data: Data = await res.json();

  return { props: { products: data.products } };
};

const HomePage: NextPage = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState('');

  const searchFilter = (array: Product[]) => {
    return array.filter((el) => el.title.toLowerCase().includes(query));
  };

  const filtered = searchFilter(products);

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <Search
          onSearch={(value: string) => {
            setQuery(value);
          }}
        />
        <div>
          <IconMinus size={48} color="#cecece" />
          <IconPlus size={48} color="#cecece" />
        </div>
      </header>
      <Products products={filtered} />
    </main>
  );
};

export default HomePage;
