import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron col-12 bg-light rounded p-3">
             <h1 className="display-4">A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque voluptatibus, laborum ducimus adipisci, cum enim,
                sequi beatae repudiandae recusandae sunt hic officia magni ab tempore quae excepturi.
                Hic, saepe debitis.</p>
                <p className="characteristic">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
            </p>
        </div>
    )
}
export default Jumbotron;