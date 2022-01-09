import React, { useRef, useState } from 'react';
import { isEmpty, isFiveChars } from '../../../helpers/isValidInput';
import styles from './Checkout.module.css';

function Checkout(props) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredNameIsValid = !isEmpty(nameInputRef.current.value);
        const enteredStreetIsValid = !isEmpty(streetInputRef.current.value);
        const enteredCityIsValid = !isEmpty(cityInputRef.current.value);
        const enteredPostalCodeIsValid = isFiveChars(postalCodeInputRef.current.value);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid

        if (!formIsValid) {
            return;
        }
    };

    const nameControlClasses =
        `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`
    const streetControlClasses =
        `${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`
    const cityControlClasses =
        `${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`
    const postalCodeControlClasses =
        `${styles.control} ${formInputsValidity.postalCode ? '' : styles.invalid}`

    return (
        <form onSubmit={confirmHandler} className={styles.form}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a validate name!</p>}
            </div>

            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a validate street!</p>}
            </div>

            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a validate city!</p>}
            </div>

            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formInputsValidity.postalCode && <p>Please enter a validate postal code (5 characters long)!</p>}
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit}> Confirm </button>
            </div>
        </form>
    )
}

export default Checkout
