import React from 'react';
import { Link } from 'react-router-dom';

const CarouselCard = ({name, value, link}) => {
    return (
        <div className="caro-card">
            <div className="title">{value} {name}</div>
            <Link to={link} className="tag">
                <label>show details</label>
                <img src="https://interview.sirv.com/icons/angle-right.svg" alt="" />
            </Link>
        </div>
    )
}

export default CarouselCard;