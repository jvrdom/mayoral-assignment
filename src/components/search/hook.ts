import { useState } from 'react';

export default function useSearch() {
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return {
    query,
    handleChange,
  };
}
