import React, { useState } from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import { cardsInfo } from '../../fakeData/cardsInfo';



const CardsMap = () => {
    const cards = cardsInfo;
    const [selectedArea, setSelectedArea] = useState(null);
    return(
        <GoogleMap defaultZoom={20} defaultCenter={{lat: 23.707872235709505, lng:90.47811511294842}}> 
            
             {

               cards.map((cards) =>(
                <Marker
                    position={{
                        
                        lat: cards.coordinates.lat,
                        lng: cards.coordinates.lng
                         
                    }}
                    onClick={() => {
                        setSelectedArea(cards);
                    }}

                
                />

               ))
            } 

            {
                selectedArea && (
                    <InfoWindow
                    
                    position = {{
                        lat: cards.coordinates.lat,
                        lng: cards.coordinates.lng

                    }}
                    >
                        <div>card details</div>
                    </InfoWindow>
                )
            }

          
            
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(CardsMap));




const Map = () => {
    return (
            
            <div className="map">
                <WrappedMap
                
                    googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCiKxw_Nge09TW8uir9TSnTX-d14ATiIc0`}
                    loadingElement = {<div style={{height: '600px'}}/>}
                    containerElement={<div style={{height: '600px'}}/>}
                    mapElement={<div style={{height: '600px'}}/>}

                />
            </div>
        
    );
};


export default Map;