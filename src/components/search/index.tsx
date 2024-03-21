import { IconSearch } from '@tabler/icons-react';

import { ChangeEvent } from 'react';
import classes from './search.module.scss';

const Search = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={classes['search-container']}>
      <IconSearch className={classes['search-icon']} color="#cecece" />
      <input className={classes.search} onChange={handleChange} type="text" placeholder="Buscar" />
    </div>
  );
};

export default Search;
