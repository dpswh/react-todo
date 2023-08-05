import styles from './Button.module.css';

const Button = (props) => {
  return <button onClick={props.onClickButton} className={styles.button}>{props.children}</button>
}

export default Button;