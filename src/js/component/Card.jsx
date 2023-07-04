import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="card-footer">
                    <a href={props.buttonURL} target="_blank" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div >
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string,
};

export default Card;
