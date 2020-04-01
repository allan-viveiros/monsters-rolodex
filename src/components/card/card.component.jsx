//This component is responsible for how those cards will look like
import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='Monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>

    </div>
);