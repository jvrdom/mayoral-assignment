import { ReactNode } from 'react';
import classes from './button.module.scss';

const Button = ({ children }: { children: ReactNode }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
