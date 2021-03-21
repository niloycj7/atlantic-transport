import { TextField } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { LocationData } from '../LocationData';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './Booking.css';
import Map from '../Map/Map';

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            marginBottom: theme.spacing(2),
            width: 350
        },
    }),
);

const Booking = () => {
    const classes = useStyle();
    const history = useHistory();
    const handleCheckout = () => {

        history.push('/checkout')
    }

    const { bookingId } = useParams();
    const location = LocationData[bookingId - 1];

    return (
        <div className=" header">
            <Header />
            <div className="row p-5">
                <div className="col-md-6">
                    <form className="py-4 bg-light text-center  rounded">
                        <TextField className={classes.textField} id="standard-basic" label="Pick From" defaultValue="Gulistan" required />
                        <TextField className={classes.textField} id="standard-basic" label="Pick To"
                            defaultValue="Mirpur" required />

                        <TextField
                            id="date"
                            label="From"
                            type="date"
                            defaultValue={new Date()}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue={new Date()}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <button onClick={handleCheckout} className='btn btn-warning w-50' type="submit">Search</button>

                    </form>
                </div>
                <div className="col-md-6">
                        <Map></Map>
                    </div>
            </div>
        </div>
    );
};

export default Booking;