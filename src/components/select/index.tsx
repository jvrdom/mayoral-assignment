import { ChangeEvent } from 'react';
import classes from './select.module.scss';

const Select = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classes['select-container']}>
      <label>Ordenar por precio: </label>
      <select defaultValue={'asc'} onChange={handleChange} className={classes.select}>
        <option value="asc">Ascendiente</option>
        <option value="desc">Descendiente</option>
      </select>
    </div>
  );
};

export default Select;
