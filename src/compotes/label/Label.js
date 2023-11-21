import React from 'react';

const Label = (props) => {
    const {children,htmlFor ="", className = ""} = props
    return (
        <label className={`form-label ${className}`} htmlFor={htmlFor}>{children}</label>
    );
};

export default Label;