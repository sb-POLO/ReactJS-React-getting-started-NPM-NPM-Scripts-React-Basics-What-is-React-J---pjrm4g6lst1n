import React from "react";

const Slides = (props) => {
    return (
        <div id="slide">
            <h1 data-testid="title">{props.title}</h1>
            <p data-testid="text">{props.text}</p>
        </div>
    );
};

export default Slides;