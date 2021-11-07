import React from 'react'

import CartIcon from '../CartIcon';
import CartContext from '../../../store/CartContext';
import styles from './CartButton.module.css';

function CartButton(props) {
    const cartCtx = React.useContext(CartContext);
    const [btnIsHighLighted, setBtnIsHighLighted] = React.useState(false)

    React.useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300)

        return (() => {
            clearTimeout(timer);
        })
    }, [cartCtx.items])

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ''}`

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >
                Your Cart
            </span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default CartButton
