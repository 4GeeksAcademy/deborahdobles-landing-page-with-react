import React from "react";

function Cards(props) {
    return (
        <div className = "card">
            <img src={props.img} className="card-img-top" alt="Las imágenes deberían de estar aquí"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
        </div>
    )
}
export default Cards;