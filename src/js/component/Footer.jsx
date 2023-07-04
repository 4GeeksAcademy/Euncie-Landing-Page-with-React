import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <div className="copyright text-light">
            <p>{props.description}</p>
        </div>
    );
};

Footer.propTypes = {
    description: PropTypes.string
};

export default Footer