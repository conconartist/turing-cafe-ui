import React from 'react';
import './Reservations.css';
import Reservation from '../Reservation/Reservation'

const Reservations = ({reservations}) => {
    const reservationsList = reservations.map(reservation => {
        return (
            <Reservation
                id={reservation.id}
                resName={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                key={reservation.id}
            />
        )
    })
    return (
        <div className='reservations-grid'>
            {reservationsList}
        </div>
    )
}
export default Reservations;