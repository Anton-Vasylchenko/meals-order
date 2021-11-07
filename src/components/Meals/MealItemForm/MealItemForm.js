import React from 'react'
import Input from '../../UI/Input'

import styles from './MealItemForm.module.css';

function MealItemForm(props) {
    const amountInputRed = React.useRef();
    const [amountIsValid, setAmountIsValid] = React.useState(true)

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRed.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount"
                input={{
                    ref: amountInputRed,
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm
