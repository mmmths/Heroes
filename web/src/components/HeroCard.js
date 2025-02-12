import React from "react";
import "../styles/global.css";

const HeroCard = ({ hero }) => (
    <div className="heroCard">
        <img src={hero.image} alt={hero.name} className="heroAvatar" />
        <h3 className="heroesText">{hero.name}</h3>
    </div>
);

export default HeroCard;
