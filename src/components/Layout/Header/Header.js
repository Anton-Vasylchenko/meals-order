import React, { Fragment } from 'react';

import CartButton from '../../Cart/CartButton';

import mealsImage from '../../../assets/meals-bg.jpg';
import logo from '../../../assets/logo.png';
import styles from './Header.module.css';

function Header(props) {
    return <Fragment>
        <header className={styles.header}>

            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <h2>Meals order</h2>
            </div>

            <CartButton onClick={props.onShowCart} />
        </header>

        <div className={styles['main-image']}>
            <img src={mealsImage} alt="meals" />
        </div>
    </Fragment>
}

export default Header
