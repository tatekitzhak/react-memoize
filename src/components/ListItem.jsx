import React from 'react';


export default React.memo(({ item }) => {
    console.log('ListItem:', item);
    return <li>{item.name}</li>;
});