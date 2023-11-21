import React from 'react';

const Button = ({type = "button",children,...rest}) => {
    return (
        <button type={type} className="btn btn-dark d-block w-100 my-4"  {...rest}>{children}</button>
    );
};

export default Button;