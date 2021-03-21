import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import { LocationData } from '../LocationData';

const Home = () => {
    const location = LocationData;

    const [booking, setBooking] = useState({
        name: "please select your ride",
        about: "",
        isBooking: false,
        id: ""
    })



    const handleBooking = (bookingPlace) => {
        setBooking({
            name: bookingPlace.name,
            about: bookingPlace.about,
            id: bookingPlace.id,
            isBooking: true,
        })


    }
    return (
        <div className="header">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-10 mt-5">
                        <h1 className="text-white">{booking.name}</h1>
                        <p className="text-white">{booking.about}</p>
                        {

                            booking.isBooking &&
                            <Link to={`/booking/${booking.id}`}>
                                <button className="btn btn-danger">Booking</button>

                            </Link>


                        }
                    </div>
                    <div className="col-md-8 col-sm-10 responsive" style={{ display: 'flex' }}>
                        {
                            location.map(location =>
                                <Destination
                                    key={location.id}
                                    location={location}
                                    handleBooking={handleBooking}
                                ></Destination>

                            )

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;