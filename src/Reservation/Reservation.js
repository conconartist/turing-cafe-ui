import React from 'react';
import './Reservation.css';

const Reservation = ({id, resName, time, number}) => {
    return (
        <div className='res-card'>
            <h2 id={id}>{resName}</h2>
        </div>
    )
}

export default Reservation;