import React from 'react';
import './Places.css';

function Places(props) {
    return (
        <div className="places">
            <img className="places__globe" src={props.item.imageUrl} alt="" />
            <div className="places__desc">
                <span className="place__loc">
                    {props.item.location}
                </span>
                <a href={props.item.googleMapsUrl}>
                    View on Google Maps
                </a>
                <h2>{props.item.title}</h2>
                <img className="places__pin" src="https://thumbs.dreamstime.com/b/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-140111691.jpg" alt="" />
                <p className="places__date">
                    <span>{props.item.startDate}</span>
                    <span>-</span>
                    <span>{props.item.endDate}</span>
                </p>
                <p className="places__info">
                    {props.item.description}
                </p>
            </div>
            <hr />
        </div>
    )
}

export default Places