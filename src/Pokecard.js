import React from "react";
import "./Pokecard.css";

const imageApi = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({id, name, type, exp}) => {
    let img = `${imageApi}${id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img className="Pokecard-image" src={img} alt=""/>
            <div className="Pokecard-info">Type: {type}</div>
            <div className="Pokecard-info">EXP: {exp}</div>
        </div>
    )
}

export default Pokecard;