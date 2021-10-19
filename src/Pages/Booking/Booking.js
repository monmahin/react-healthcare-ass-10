import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId}=useParams()
    return (
        <div className="mt-5">
            <br />
            <br />
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;