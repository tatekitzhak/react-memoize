import React from 'react';

function Child({seconds}) {
    console.log('Child:', seconds)
    return (
        <div>
            Im updating every {seconds} seconds
        </div>
    );
}

export default React.memo(Child);