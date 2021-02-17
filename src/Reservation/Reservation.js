import React from 'react';
import './Reservation.css';

const Reservation = ({id, resName, date, time, number}) => {
    return (
        <div className='res-card'>
            <h2 id={id} className='res-name'>{resName}</h2>
            <p className='date'>{date}</p>
            <p className='time'>{time} pm</p>
            <p className='number'>Number of guests: {number}</p>
            <button className="cancel-button">Cancel</button>
        </div>
    )
}

export default Reservation;