import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron m-5">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <a className="btn btn-primary btn-lg" href={props.buttonURL} target="_blank" role="button">
                {props.buttonLabel}
            </a>
        </div>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string,
};

export default Jumbotron;