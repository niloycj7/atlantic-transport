import React from 'react';
import './Destination.css';

const Destination = ({handleBooking, location}) => {
    const {name,image} = location;
    return (
        <div className="text-white mt-5 p-2" onClick={()=>handleBooking(location)}>
            <img className="w-100" src={image} alt=""/>
            <h3 className="title">{name}</h3>
        </div>
    );
};

export default Destination;