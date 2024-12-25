import React from 'react';

function Logo({ width = '100px' }) {
    return (
        <div 
            className="font-semibold font-serif text-xl inline-block" 
            style={{
                width,
                color: '#FFD700', // Golden color
                whiteSpace: 'nowrap', // Prevent clipping when resizing
            }}
        >
            Skroller
        </div>
    );
}

export default Logo;
