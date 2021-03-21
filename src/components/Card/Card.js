import React from 'react';
import './Card.css';
const Card = (props) => {
    const {from, to, icon, fare, capacity, picture, name } = props.cards;
    return (
        <div className="d-flex text-dark">
            <div className="col-md-8 bg-secondary">
                <div className="p-3 mb-3 rounded bg-warning mt-5">
                <p>{from}</p>
                <br/>
                <p>{to}</p>
                </div>
                <div className="p-3 mb-3 rounded d-flex align-items-center justify-content-around bg-light">
                    <img className="w-25" src={picture} alt=""/>
                    <p>{name}</p>
                    <img width="20%" src={icon} alt=""/>
                    <p>{capacity}</p>
                    <p>{fare}</p>
                </div>
                <div className="p-3 mb-3 rounded d-flex align-items-center justify-content-around bg-light">
                    <img className="w-25" src={picture} alt=""/>
                    <p>{name}</p>
                    <img width="20%" src={icon} alt=""/>
                    <p>{capacity}</p>
                    <p>{fare}</p>
                </div>
                <div className="p-3 mb-3 rounded d-flex align-items-center justify-content-around bg-light">
                    <img className="w-25" src={picture} alt=""/>
                    <p>{name}</p>
                    <img width="20%" src={icon} alt=""/>
                    <p>{capacity}</p>
                    <p>{fare}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;