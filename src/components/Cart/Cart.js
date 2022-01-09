import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';
import Checkout from './Checkout';

import styles from './Cart.module.css';

function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const cartItems = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />)
    );

    const modalActions =
        <div className={styles.actions}>
            <button className={styles['buton--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems &&
                <button onClick={orderHandler} className={styles.button}>Order</button>}
        </div>

    return (
        <Modal onClose={props.onClose}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}

        </Modal>
    )
}

export default Cart
