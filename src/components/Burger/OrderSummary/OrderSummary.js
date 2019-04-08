import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
        })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel Order</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Fragment>
    )
};

export default orderSummary;