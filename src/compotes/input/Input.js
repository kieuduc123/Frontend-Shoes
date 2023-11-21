import React from 'react';
// import {useController} from  "react-hook-form";
const Input = (props) => {
    const {control, name, type,children,className,...rest} = props;
    // const {field} = useController({
    //     control,name,defaultValue : ""
    // })

    return (
        <div className='position-relative'>
           <input id={name} type={type} className=  "form-control "
           {...rest} 
        //    {...field}
           />
           {children}
        </div>
    );
};

export default Input;