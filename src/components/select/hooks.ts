import { Product } from '@/interfaces/data';
import { useState } from 'react';

export default function useSelect() {
  const [sortState, setSortState] = useState('asc');

  const handleChange = (value: string) => {
    setSortState(value);
  };

  const sortMethods = {
    asc: { method: undefined },
    desc: { method: (a: Product, b: Product) => (a.price > b.price ? -1 : 1) },
  };

  return {
    handleChange,
    sortState,
    sortMethods,
  };
}
