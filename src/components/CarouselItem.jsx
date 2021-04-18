import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
import img from "../assets/static/react-logo.png"
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'
const CarouselItem = () =>(
        <div className="carousel-item">
        <img className="carousel-item__img" src={img} alt="" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={play} alt="Play Icon" />
                <img className="carousel-item__details--img" src={plus} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">Titulo Descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114min</p>
        </div>
    </div>
);

export default CarouselItem;