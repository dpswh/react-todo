import styles from './Button.module.css';


// useContext and AppContext should go together
// import { useContext } from 'react';
// import { AppContext } from '../../../App';

const Button = (props) => {
  return <button className={styles.button}>{props.children}</button>
}

export default Button;