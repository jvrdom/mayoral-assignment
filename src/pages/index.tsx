import { IconMinus, IconPlus } from '@tabler/icons-react';

import Products from '@/components/products';
import Search from '@/components/search';
import useSearch from '@/components/search/hook';
import Select from '@/components/select';
import useSelect from '@/components/select/hooks';
import { Data, Product } from '@/interfaces/data';
import { NextPage } from 'next';
import { useState } from 'react';
import classes from './index.module.scss';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data: Data = await res.json();
  const newProducts = data.products.map((p) => {
    return {
      ...p,
      newPrice: p.price - (p.price * p.discount) / 100,
    };
  });

  return { props: { products: newProducts } };
};

const HomePage: NextPage = ({ products }: { products: Product[] }) => {
  const [hideLastElement, setHideLastElement] = useState(false);
  const { query, handleChange } = useSearch();
  const { sortMethods, sortState, handleChange: handleSelect } = useSelect();

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

      <Select
        onChange={(value: string) => {
          handleSelect(value);
        }}
      />

      <Products
        products={filtered.sort(sortMethods[sortState].method)}
        hideLastElement={hideLastElement}
      />
    </main>
  );
};

export default HomePage;
