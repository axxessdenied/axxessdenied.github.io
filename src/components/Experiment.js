import React from 'react';

const Experiment = ({ children, ...rest }) => {
    return (
        <button className="Experiment" {...rest}>
            {children}
        </button>
    )
}

export default Experiment;