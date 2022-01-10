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

        const enteredData = {
            name: nameInputRef.current.value,
            street: streetInputRef.current.value,
            city: cityInputRef.current.value,
            postalCode: postalCodeInputRef.current.value
        }

        const enteredDataIsValid = {
            name: !isEmpty(enteredData.name),
            street: !isEmpty(enteredData.street),
            city: !isEmpty(enteredData.city),
            postalCode: isFiveChars(enteredData.postalCode)
        }

        setFormInputsValidity({
            ...enteredDataIsValid
        })

        const formIsValid = !Object.values(enteredDataIsValid).includes(false);

        if (!formIsValid) {
            return;
        }

        props.onSubmit(enteredData)
    };

    const controlClasses = (formInputField) => {
        return `${styles.control} ${formInputsValidity[formInputField] ? "" : styles.invalid}`;
    };

    return (
        <form onSubmit={confirmHandler} className={styles.form}>
            <div className={controlClasses('name')}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a validate name!</p>}
            </div>

            <div className={controlClasses('street')}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a validate street!</p>}
            </div>

            <div className={controlClasses('city')}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a validate city!</p>}
            </div>

            <div className={controlClasses('postalCode')}>
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
