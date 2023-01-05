import styles from './button.module.css';

interface Button {
    variant: string
}

const Button = ({variant}: Button) => {
    return <div className={styles.button}>click</div>
}

export default Button