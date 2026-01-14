import React from "react";
import Card from "./Card.jsx";
import { useState } from "react";

const Testimonial = (props) => {
    let reviews = props.reviews;   
    const [index, setIndex] = useState(0);        

    return (
        <div>
            <Card reviews={reviews[0]} />     
        </div>
    );
};

export default Testimonial;
