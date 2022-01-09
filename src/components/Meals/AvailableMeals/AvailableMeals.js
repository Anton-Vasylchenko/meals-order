import React, { useEffect, useState } from 'react'
import MealItem from '../MealItem';
import Card from '../../UI/Card';
import Spinner from '../../UI/Spinner';
import apiServices from '../../../services/api-services';

import styles from './AvailableMeals.module.css';

function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [httpError, setHttpError] = useState('')

    useEffect(() => {
        apiServices.getMeals()
            .then(data => {
                setMeals(data)
                setLoaded(true)
            }, error => {
                setHttpError(error.message)
            });
    }, [])

    const mealList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
        />
    ));

    const content = loaded ? <ul>{mealList}</ul> : <Spinner />

    return (
        <section className={styles.meals}>
            <Card>
                {!httpError ?
                    content :

                    <p className={styles.error}>
                        {httpError}
                    </p>}
            </Card>
        </section>
    )
}

export default AvailableMeals
