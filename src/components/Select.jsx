import React, { forwardRef, useId } from 'react';

function Select({ options, label, className, ...props }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="text-sm font-medium text-white">{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white/30 text-white backdrop-blur-md shadow-md outline-none focus:ring-2 ring-blue-500 w-full ${className}`}
            >
                {options?.map((option, idx) => (
                    <option key={idx} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(Select);
