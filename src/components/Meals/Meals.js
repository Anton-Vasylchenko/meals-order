import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary';
import AvailbaleMeals from './AvailableMeals';

function Meals() {
    return (
        <Fragment>
            <MealsSummary />
            <AvailbaleMeals />
        </Fragment>
    )
}

export default Meals
