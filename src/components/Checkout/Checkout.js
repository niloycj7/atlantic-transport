import React from 'react';
import { cardsInfo } from '../../fakeData/cardsInfo';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Map from '../Map/Map';

const Checkout = () => {

    const cards = cardsInfo;


    return (
        <div className='px-5  bg-light text-dark'>
            <Header />
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {
                            cards.map(cards => (
                                <Card
                                cards={cards}
                                    key={cards.name}
                                />
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        <Map></Map>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Checkout;