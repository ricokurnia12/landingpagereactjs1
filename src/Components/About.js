import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Repellendus accusantium amet, quasi ipsum
                    alias architecto ipsa maxime ratione porro
                    numquam, assumenda dolore harum nobis, impedit
                    voluptate? Aliquam sapiente dignissimos
                    consectetur enim nesciunt dolorum quas sequi!
                </p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;
