import React from 'react';

const ListItem = ({ item }) => {
    console.log('ListItem:',item);
    return <li>{item.name}</li>;
  };

  export default ListItem;