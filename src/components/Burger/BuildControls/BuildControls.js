import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import { isNullOrUndefined } from 'util';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const dollarStyle = {
    fontSize: '15px',
    display: 'inline',
    position: 'relative',
    bottom: '20px'
}

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <div style={dollarStyle}>$</div><strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;