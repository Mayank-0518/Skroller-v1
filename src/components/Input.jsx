import React, { forwardRef, useId } from 'react';

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 text-white' htmlFor={id}>{label}</label>}
            <input 
                type={type}
                className={`px-3 py-2 rounded-lg bg-white/30 text-white outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md border border-gray-500 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
