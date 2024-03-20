import React from "react";
import './css/Course.css';

function Course({course}) {

    const {id,title,description,price,image} = course
    
    return <div className="course">
            <img src={image} width={200} height={100}/>
            <h4 className="course-title">{title}</h4>
            <p className="course-desc">{description}</p>
            <h3 className="course-price">{price}</h3>
    </div>;
}

export default Course;
